// A way to handle local storage. A getter and setter

// Retrieve local storage and return it as a JSON object.
const getLocalStorage = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key)); 
    } catch (error) {
        console.error(error);
    }
}

// if local storage is empty create it. If it has something in it append.
const setLocalStorage = (key, jsonObject) => {
    //Does the key exist?
    let store = this.getLocalStorage(key);
    try {
        if (store) {
            newStore = JSON.parse(store);
        }

    } catch (error) {
        console.error(error);
    }
}
