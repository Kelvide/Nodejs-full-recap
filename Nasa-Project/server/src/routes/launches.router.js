const router = require('express').Router()
const launcheController = require('../controllers/launches.contoller')

router.get('/', launcheController.httpGetAllLaunches)
router.post('/', launcheController.httpAddNewLaunch)

module.exports = router;