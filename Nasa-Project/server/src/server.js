const http = require('http')
const mongoose = require('mongoose')

const app = require('./app')

const { loadPlanets } = require('./models/planets.model')

const PORT = process.env.PORT || 8000

const MONGO_URL = 'mongodb+srv://nasa-api:ljFGAGnlPmuR0PVs@cluster0.ht2gnx1.mongodb.net/?retryWrites=true&w=majority'

const server = http.createServer(app)

mongoose.connection.on('open', () => {
    console.log('MongoDB connection ready')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

const startServer = async () => {
    await mongoose.connect(MONGO_URL);
    await loadPlanets()
    server.listen(PORT, () => console.log(`Listening to port ${PORT}...`))
}

startServer();