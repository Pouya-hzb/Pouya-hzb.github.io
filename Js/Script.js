const icon = document.querySelector(".element");
const nav = document.querySelector(".nav");
const element = document.querySelector(".element2");
const element3 = document.querySelector(".element3");

element.addEventListener("click",function() {
  element.classList.toggle("element-show");
  element3.classList.toggle("element3-show");
});

icon.addEventListener("click", function () {
  nav.classList.toggle("nav-show");
});