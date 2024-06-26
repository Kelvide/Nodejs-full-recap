const launchesDatabase = require('./launches.mongo')
const planets = require('./planets.mongo')

const DEFAULT_FLIGHT_NUMBER = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

const saveLaunch = async (launch) => {
    const planet = await planets.findOne({
        keplerName: launch.target,
    })

    if (!planet) {
        throw new Error("No matching planet found")
    }

    await launchesDatabase.findOneAndUpdate({
        flightNumber: launch.flightNumber,
    }, launch, { upsert: true }
    )
}

saveLaunch(launch)

const findLaunchWithId = async (launchId) => {
    return await launchesDatabase.findOne({ flightNumber: launchId })
}

const getLatetstFlightNumber = async () => {
    const latestLaunch = await launchesDatabase
        .findOne()
        .sort('-flightNumber') // -flightNumber sort in a decending order and gives us the highest number

    if (!latestLaunch) {
        return DEFAULT_FLIGHT_NUMBER
    }

    return latestLaunch.flightNumber;
}

const getAllLaunches = async () => {
    return await launchesDatabase.find({}, { '_id': 0, '__v': 0 })
}


const scheduleNewLaunch = async (launch) => {
    const newFlightNumber = await getLatetstFlightNumber() + 1

    const newLaunch = Object.assign(launch, {
        flightNumber: newFlightNumber,
        success: true,
        upcoming: true,
        customers: ['Zero to Mastery', 'NASA']
    })

    await saveLaunch(newLaunch)
}


const abortLaunchById = async (launchId) => {
    return await launchesDatabase.updateOne({ flightNumber: launchId }, { upcoming: false, success: false })

    // const aborted = launches.get(launchId);
    // aborted.upcoming = false;
    // aborted.success = false;
    // return aborted;
}

module.exports = { getAllLaunches, scheduleNewLaunch, findLaunchWithId, abortLaunchById }