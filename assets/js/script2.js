$(".modal-button").click(function () {
  var target = $(this).data("target");
  $("html").addClass("is-clipped");
  $(target).addClass("is-active");
});

$(".modal-close").click(function () {
  $("html").removeClass("is-clipped");
  $(this).parent().removeClass("is-active");
});

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