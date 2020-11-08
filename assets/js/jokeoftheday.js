'use strict';

const buttonTwoPress = document.getElementById('btn2');

const jokeClickHanlder = (event) => {

  event.preventDefault();

  fetchJoke();

  //console.log(event);

}

const displayJoke = (data) => {

  let joke = document.getElementById('box-two-joke');

  let setup = data.setup;
  let delivery = data.delivery;

  joke.textContent = setup + '\n' + '\n' + delivery;

}

const fetchJoke = () => {

  fetch("https://jokeapi-v2.p.rapidapi.com/joke/Programming?contains=C%2523&format=json&blacklistFlags=nsfw%2Cracist&idRange=0-150&type=single%2Ctwopart", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "71e5f35824msh98273649261f1ebp1485e6jsn5981b60dca9f",
      "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com"
    }
  })
    .then((res) => res.json())
    .then((data) => {
      displayJoke(data);
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });

}

buttonTwoPress.addEventListener('click', jokeClickHanlder);