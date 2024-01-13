const http = require("http");
const PORT = 3200;

const server = http.createServer()

const data = [
    {
        id: 0,
        name: "Kelvin"
    },
    {
        id: 1,
        name: "Hello"
    },
]

server.on('request', (req, res) => {
    const urlSplit = req.url.split('/')
    if (urlSplit[1] === "home") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        if (urlSplit.length === 3) {
            const dataIndex = +urlSplit[2]
            res.end(JSON.stringify(data[dataIndex]))
        } else[
            res.end(JSON.stringify(data))
        ]
    } else if (urlSplit[1] === "message") {
        // Header set to Html
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html")
        res.write('<li>Hello</li>')
        res.write('<li>World</li>')
        res.end();
    } else {
        res.statusCode = 400;
        res.end();
    }
})

server.listen(PORT, () => { console.log(`Listening to port ${PORT}...`) })