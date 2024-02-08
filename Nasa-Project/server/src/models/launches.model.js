const launches = new Map()

let latestFlightNumber = 100;

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

launches.set(launch.flightNumber, launch)

const findLaunchWithId = (launchId) => {
    return launches.has(launchId)
}

const getAllLaunches = () => {
    return Array.from(launches.values())
}

const addNewLaunches = (launch) => {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            success: true,
            upcoming: true,
            customers: ['Zero to Mastery', 'NASA']
        })
    );
}

const abortLaunchById = (launchId) => {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = { getAllLaunches, addNewLaunches, findLaunchWithId, abortLaunchById }