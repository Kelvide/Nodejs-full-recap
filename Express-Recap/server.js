const express = require('express')
const app = express()
const PORT = 3200;
const friendRoutes = require('./routes/friends.router')
const messageRoutes = require('./routes/messages.router')

app.use((req, res, next) => {
    const start = Date.now()
    next();
    const delta = Date.now() - start
    console.log(`Method:${req.method} URL:${req.url} ms:${delta}`)
})

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello")
})

app.use('/friends', friendRoutes)
app.use('/messages', messageRoutes)

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}...`)
}) 