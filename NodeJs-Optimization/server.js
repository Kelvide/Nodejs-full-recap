const express = require('express');
const cluster = require('cluster')

const app = express()

// Response time should be below 200ms or 100ms

const delay = (duration) => {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // event loop is blocked...
    }
}

app.get('/', (req, res) => {
    // A real example of event loop block function in NodeJs cause NodeJs is a single threaded language

    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => {}
    // [5,4,3,2,1].sort()

    // Key derivation functions to hash password that work as an event loop blocker
    // crypto.scrypt()
    // crypto.pbkdf2()
    res.send(`Performance example ${process.pid}`)
})

app.get('/timer', (req, res) => {
    // Delaay the response
    delay(9000)
    res.send(`Ding ding ding ${process.pid}`)
})

if (cluster.isMaster) {
    console.log("Master has been started")
    // To create workers
    cluster.fork();
    cluster.fork();
} else {
    console.log("worker process started");
    app.listen(3000)
}
