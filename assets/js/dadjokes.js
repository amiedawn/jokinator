'use strict';

const buttonOnePress = document.getElementById('btn1')

const dadJokeEventHanlder = (event) => {

  event.preventDefault();

  fetchDadJoke();

  //console.log(event);

}

const displayJokePunch = (data) => {

  let jokePunch = document.getElementById('box-one-joke');
  let setup = data.body[0].setup;
  let punchline = data.body[0].punchline;

  jokePunch.textContent = setup + '\n' + '\n' + punchline;

  setJoke('dadjokes', data.body[0]);

}

// fetch apis
const fetchDadJoke = () => {

  fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": getStore().dadjokes.api_key,
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
    }
  })
    .then((res) => res.json())
    .then((data) => {
      displayJokePunch(data);
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });

}

buttonOnePress.addEventListener('click', dadJokeEventHanlder);