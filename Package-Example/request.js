// Importing the third party package installed from the npm registry
const axios = require("axios")

axios.get('https://google.com')
    // The then returns a message when the request is successful
    .then((response) => {
        console.log(response)
    })
    // The catch returns a message when there is an error
    .catch((err) => {
        console.log(err);
    })
    // The then returns a message wether there is an error or not
    .then(() => {
        console.log("All Done")
    })