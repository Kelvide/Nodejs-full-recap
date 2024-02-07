const router = require('express').Router()

const planetsContorller = require('../controllers/planets.controller');

router.get('/planets', planetsContorller.httpGetAllPlanets)

module.exports = router;