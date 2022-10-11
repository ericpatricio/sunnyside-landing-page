"use strict";
// Variables
const toggler = document.querySelector(".toggler");
const navbarLinks = document.querySelector(".navbar-links");

// Add eventlistener to document object to look for class navbar-links open
document.addEventListener("click", function (e) {
  if (e.target !== toggler) {
    navbarLinks.classList.remove("open");
  } else {
    navbarLinks.classList.toggle("open");
  }
});

// Scroll event to remove mobile menu
let lastScrollTop;
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset;

  if (scrollTop > lastScrollTop) {
    navbarLinks.classList.remove("open");
  }
  lastScrollTop = scrollTop;
});
// window resize event when width is more than 1024px remove class open
window.addEventListener("resize", function () {
  if (window.innerWidth > 1024) navbarLinks.classList.remove("open");
});
