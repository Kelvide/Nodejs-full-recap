// Creating an HTTPS module
// url the destination and send is the data to send to the destination
const { send } = require('./request');
const read = require('./response');

function makeRequest(url, data) {
    send(url, data)
    return read();
}

const responseData = makeRequest('https://google.com', "hello")
console.log(responseData)

// This is a global object in Node JS to check the cached modules 
console.log(require.cache)