// A way to handle local storage. A getter and setter


// Retrieve local storage and return it as a JSON object.
const getJokes = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key)); 
    } catch (error) {
        console.error(error);
    }
}

// For each API we touch we should have a new json object that contains a list of jokes we have received from that api
// We also need to account for jokes submitted by the user to twitter and we will want to save those as well.
// Lastly we want to store API keys for the joke sites as well. 
// JSON schema:
// {
//     dadjokes: {
//         jokes: [
//             jsonObject_from_api
//             anotherOne,
//             etc.
//         ],
//         api_key: string
//     },
//     icanhasdadjoke: {
//         jokes: [
//             jsonObject_from_api
//             anotherOne,
//             etc.
//         ],
//         api_key: string
//     },
//     userjokes: {
//         jokes: [
//             jsonObject_from_api
//             anotherOne,
//             etc.
//         ],
//         api_key: string
//     },
// }

const setJoke = (key, api, jsonObject) => {
    //Does the key exist?
    console.log(key);
    var store = getLocalStorage(key);
    console.log(store);
    try {
        if (store !== null) {
            var newStore = JSON.parse(store);
            console.log(newStore);
            window.localStorage.setItem(key, newStore);
        } else {
            var newStore = {};
            newStore[api] = [].push(jsonObject);
            JSON.stringify(jsonObject);
            window.localStorage.setItem(key, newStore);
        }

    } catch (error) {
        console.error(error);
    }
}
