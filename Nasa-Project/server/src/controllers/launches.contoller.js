const launchModels = require('../models/launches.model')

const httpGetAllLaunches = (async (req, res) => {
    return res.status(200).json(await launchModels.getAllLaunches())
})

const httpAddNewLaunch = (async (req, res) => {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property',
        })
    }

    launch.launchDate = new Date(launch.launchDate)
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: "Invalid launch date"
        })
    }

    await launchModels.scheduleNewLaunch(launch)
    return res.status(201).json(launch)
})

const httpAbortLaunch = (async (req, res) => {
    const launchId = +req.params.id;

    const existsLaunch = await launchModels.findLaunchWithId(launchId)
    if (!existsLaunch) {
        return res.status(404).json({ error: "Launch not found" })
    }

    const aborted = await launchModels.abortLaunchById(launchId)

    if (!aborted) {
        return res.status(400).json({ error: "Launch not aborted" })
    }
    return res.status(200).json({ ok: true })
})


module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch }