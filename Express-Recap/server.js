const express = require('express')
const app = express()
const PORT = 3200;
const messagesController = require('./controllers/messages.controller')
const friendsController = require('./controllers/friends.controller')

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

app.get('/', (req, res) => {
    res.send("Hello")
})

app.post('/friend', friendsController.creatFriends)
app.get('/friends', friendsController.getFriends)
app.get('/friends/:id', friendsController.getEachFriends)
app.get('/messages', messagesController.getMessages)
app.post('/messages', messagesController.createMessage)

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}...`)
}) 