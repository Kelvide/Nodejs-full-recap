const express = require('express');

const app = express()

// Response time should be below 200ms or 100ms
const delay = (duration) => {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // event loop is blocked...
    }
}

app.get('/', (req, res) => {
    res.send(`Performance example ${process.pid}`)
})

app.get('/timer', (req, res) => {
    // Delaay the response
    delay(9000)
    res.send(`Beep beep beep ${process.pid}`)
})


console.log("worker process started");
app.listen(3000)