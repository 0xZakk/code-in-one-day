var nav = document.querySelector("nav");
var menu = document.querySelector(".menu");
var close = document.querySelector(".close");

menu.addEventListener("click", function(e) {
  e.preventDefault();
  nav.classList.add("open");
});

close.addEventListener("click", function(e) {
  e.preventDefault();
  nav.classList.remove("open");
});
