const express = require('express')
const app = express()
const PORT = 3200;

const friends = [
    {
        id: 0,
        name: "Hello World"
    },
    {
        id: 1,
        name: "Hey World"
    }
]

app.use((req, res, next) => {
    const start = Date.now()
    next();
    const delta = Date.now() - start
    console.log(`Method:${req.method} URL:${req.url} ms:${delta}`)
})

app.use(express.json())

app.post('/friend', (req, res) => {
    const { name } = req.body
    if (!name) return res.status(400).json({ error: "Missing friend name" })
    const newFriend = { name: req.body.name, id: friends.length }
    friends.push(newFriend)
    res.status(200).json(newFriend)
})

app.get('/', (req, res) => {
    res.send("Hello")
})
app.get('/friends', (req, res) => {
    res.json(friends)
})
app.get('/friends/:id', (req, res) => {
    if (friends[+req.params.id]) {
        res.status(200).json(friends[req.params.id])
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