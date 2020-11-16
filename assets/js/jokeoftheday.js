'use strict';

const buttonTwoPress = document.getElementById('btn2');

const jokeClickHanlder = (event) => {

  event.preventDefault();

  fetchJoke();

}

const displayJoke = (data) => {

  let joke = document.getElementById('box-two-joke');

  // If this is a knock knock joke it is redundant to have the title. keeping for future development reasons.
  let delivery = data.contents.jokes[0].joke.text;

  joke.textContent = delivery;
  setJoke('jokeoftheday', data.contents.jokes[0]);

}

const fetchJoke = () => {

  fetch("https://jokes.p.rapidapi.com/jod?category=knock-knock", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": getStore().jokeoftheday.api_key,
      "x-rapidapi-host": "jokes.p.rapidapi.com",
    }
  })
    .then((res) => res.json())
    .then((data) => {
      displayJoke(data);
    })
    .catch(err => {
      console.error(err);
    });

}

buttonTwoPress.addEventListener('click', jokeClickHanlder);