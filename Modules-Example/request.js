// Encrypt the data to send
// Setting the request timeout to 500 mili-seconds
const REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encrypted data';
}

function send(url, data) {
    const encryptedData = encrypt(data)
    console.log(`sending ${encryptedData} to ${url}`)
}

module.exports = { send, REQUEST_TIMEOUT }