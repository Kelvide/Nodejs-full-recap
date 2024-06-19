const router = require('express').Router()

const planetsContorller = require('../../controllers/planets.controller');

router.get('/', planetsContorller.httpGetAllPlanets)

module.exports = router;