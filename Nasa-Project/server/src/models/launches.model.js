const launches = new Map()

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocked: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch)

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
            customer: ['Zero to Mastery', 'NASA']
        })
    );
}

module.exports = { getAllLaunches, addNewLaunches }