const mongoose = require('mongoose')

const MONGO_URL = 'mongodb+srv://nasa-api:ljFGAGnlPmuR0PVs@cluster0.ht2gnx1.mongodb.net/?retryWrites=true&w=majority'

mongoose.connection.on('open', () => {
    console.log('MongoDB connection ready')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

const mongoConnect = async () => {
    await mongoose.connect(MONGO_URL)
}

module.exports = { mongoConnect }