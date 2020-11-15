// display current day in header
var today = moment().format("dddd, MMMM Do");
var $headerDate = $("#currentDay");

const submitTweetId = document.getElementById('btnSupply');
const userInputId = document.getElementById('supply-joke');

$headerDate.text(today);

const tweetSubmitHandler = (event) => {

  event.preventDefault();

  let userInput = userInputId.value;

  submitTweetId.href = `https://twitter.com/intent/tweet?text=@Jokinator3 ${userInput}`;

  // console.log(userInput);
  // console.log(event);

}

// Modal open and close
$(".modal-button").click(function () {
  var target = $(this).data("target");
  $("html").addClass("is-clipped");
  $(target).addClass("is-active");
});

$(".modal-close").click(function () {
  $("html").removeClass("is-clipped");
  $(this).parent().removeClass("is-active");
});

// open the modal after 10 seconds
setTimeout(() => {
  document.getElementById('modal-button').click();

}, 10000);

// create a Twitter for Websites widget (a Tweet button, Follow button, embedded Tweet or timeline)
window.twttr = (function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function (f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

submitTweetId.addEventListener('click', tweetSubmitHandler);

// // inserts "Tweet ID 20" into a page inside an element with ID of container, returns a promise
// twttr.widgets.createTweet(
//   '20',
//   document.getElementById('container'),
//   {
//     theme: 'dark'
//   }
// );

// execute code after a widget has been inserted onto the page by passing a callback to the resulting promise's then function
// twttr.widgets.createTweet(...)
//   .then(function (el) {
//     console.log('Tweet added.');
//   });
