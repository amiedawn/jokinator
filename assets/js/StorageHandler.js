'use strict';

// Retrieve local storage and return it as a JSON object.
const getStore = () => {
    try {
        return JSON.parse(localStorage.getItem('store')); 
    } catch (error) {
        console.error(error);
    }
}

// For each API we touch we should have a new json object that contains a list of jokes we have received from that api
// We also need to account for jokes submitted by the user to twitter and we will want to save those as well.
// Lastly we want to store API keys for the joke sites as well. 

// First lets initialize the store object. With API keys.
let store = {
    dadjokes: {
        jokes: [],
        api_key: 'fa2856ae8emsh6ded39328f26c5dp167fcajsn0bba20c39799',
    },
    jokeoftheday: {
        jokes: [],
        api_key: '71e5f35824msh98273649261f1ebp1485e6jsn5981b60dca9f',
    },
    userjokes: {
        jokes: [],
    },
}

if (!window.localStorage.getItem('store')) {
    window.localStorage.setItem('store', JSON.stringify(store));
}

const setJoke = (jokeSource, jokeObject) => {
    var store = getStore();
    try {
        store[jokeSource].jokes.push(jokeObject);
        window.localStorage.setItem('store', JSON.stringify(store));
    } catch (error) {
        console.error(error);
    }
}

// since the joke of the day returns the same joke for the day we only create this for the dad joke
// returns true or false if the id exists in the store.
const getDadJokeFromStore = (id) => {
    let dadJokeIds = getStore().dadjokes.jokes.map(dadJoke => dadJoke._id);
    return dadJokeIds.includes(id);
}
