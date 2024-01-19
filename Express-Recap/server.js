const express = require('express')
const app = express()
const PORT = 3200;

const friends = [
    {
        id: '0',
        name: "Hello World"
    },
    {
        id: '1',
        name: "Hey World"
    }
]

app.use((req, res, next) => {
    const start = Date.now()
    next();
    const delta = Date.now() - start
    console.log(`Method:${req.method} URL:${req.url} ms:${delta}`)
})

app.get('/', (req, res) => {
    res.send("Hello")
})
app.get('/friends', (req, res) => {
    res.json(friends)
})
app.get('/friends/:id', (req, res) => {
    if (friends[+req.params.id]) {
        res.json(friends[req.params.id])
    } else {
        res.status(404).json({ error: "Friend not found" })
    }
})
app.post('/message', (req, res) => {
    res.send("Sending Message")
})

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}...`)
}) 