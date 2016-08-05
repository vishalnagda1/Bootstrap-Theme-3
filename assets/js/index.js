$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.section-head .navbar-default').css("padding", "9.3px 0");
    $('.nav-section .navbar-brand').css("font-size","1.5em");
  } else {
    $('.section-head .navbar-default').css("padding", "24.7px 0");
    $('.nav-section .navbar-brand').css("font-size","2em");
  }
});