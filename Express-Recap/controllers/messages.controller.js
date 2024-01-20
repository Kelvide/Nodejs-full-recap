const getMessages = (req, res) => {
    res.send("Hello World")
}

const createMessage = (req, res) => {
    res.send("Sending Message")
}

module.exports = {
    getMessages, createMessage
}