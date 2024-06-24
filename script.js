const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

const navMenu = document.querySelector(".nav-menu");
const effectClass = document.querySelector(".effect-class");

hamburgerIcon.addEventListener("click", function () {

  navMenu.style.right = "0";
  effectClass.classList.add("effect");
  console.log("working")

});
closeIcon.addEventListener("click", function () {

  navMenu.style.right = "-240px";
  effectClass.classList.remove("effect");
});
