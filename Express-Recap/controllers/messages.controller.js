const path = require('path') // Helps to access file on different os 

const getMessages = (req, res) => {
    // res.send("Hello World")
    res.sendFile(path.join(__dirname, '..', 'public', 'dummy.png'))
}

const createMessage = (req, res) => {
    res.send("Sending Message")
}

module.exports = {
    getMessages, createMessage
}