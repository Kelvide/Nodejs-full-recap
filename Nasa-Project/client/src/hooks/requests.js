const API_URL = 'http://localhost:8000'

// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`)
  return await response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`)
  console.log(response)
  const fetchLaunches = await response.json();
  return fetchLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  })
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready. 
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpAbortLaunch, httpGetLaunches, httpGetPlanets, httpSubmitLaunch
};
