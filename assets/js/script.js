// display current day in header
var today = moment().format("dddd, MMMM Do");
var $headerDate = $("#currentDay");

const submitTweetId = document.getElementById('btnSupply');
const userInputId = document.getElementById('supply-joke');

$headerDate.text(today);

// tweet user input
const tweetSubmitHandler = (event) => {

  event.preventDefault();

  let userInput = userInputId.value;

  submitTweetId.href = `https://twitter.com/intent/tweet?text=@Jokinator3 ${userInput}`;

}

// Modal open and close and show/hide modal
$(".modal-button").click(function () {
  var target = $(this).data("target");
  $("html").addClass("is-clipped");
  $(target).addClass("is-active");
  $('.modal').show();
});

$(".modal-close").click(function () {
  $("html").removeClass("is-clipped");
  $(this).parent().removeClass("is-active");
  $('.modal').hide();
});

$('#btnSupply').click(function () {
  $('.modal').hide();
});

$('#btnReturn').click(function () {
  $('.modal').hide();
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