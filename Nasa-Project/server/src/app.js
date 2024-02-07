const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')

const planetsRouter = require('./routes/planets.router')
const launchesRouter = require('./routes/launches.router')

const app = express()

app.use(cors())
app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

// Routes
app.use(planetsRouter)
app.use('/launches', launchesRouter)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app