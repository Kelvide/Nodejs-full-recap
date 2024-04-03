
const { parse } = require('csv-parse');
const path = require('path')
const fs = require('fs')

const planets = require('./planets.mongo')

const isHabitablePlanet = (planet) => {
    return planet['koi_disposition'] === "CONFIRMED" && planet['koi_insol'] > 0.38 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

const savePlanet = async (planet) => {
    try {
        await planets.updateOne({
            keplerName: planet.kepler_name,
        }, {
            keplerName: planet.kepler_name,
        }, {
            upsert: true
        })
    } catch (err) {
        console.log(`Could not save planet ${err}`);
    }
}

const getAllPlanets = async () => {
    return await planets.find({}, { '_id': 0, '__v': 0 });
}

const loadPlanets = () => {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: "#",
                columns: true,
            }))
            .on('data', async (data) => {
                if (isHabitablePlanet(data)) {
                    savePlanet(data)
                }
            })
            .on('error', (err) => {
                console.log(err.message)
                reject(err)
            })
            .on('end', async () => {
                const countPlanetFound = await getAllPlanets()
                console.log(`${countPlanetFound.length} habitable planets found`)
                resolve()
            });
    })
}

module.exports = { loadPlanets, getAllPlanets }