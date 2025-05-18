"use strict"; // Enforces stricter parsing and error handling in JavaScript

/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
// Selects the HTML element that has the custom attribute [data-navbar]

const navToggler = document.querySelector("[data-nav-toggler]");
// Selects the toggle button element with the attribute [data-nav-toggler]

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
// Adds a click event to the navToggler button
// When clicked, it toggles the "active" class on the navbar (show/hide menu)

/**
 * Header active
 */

const header = document.querySelector("[data-header]");
// Selects the header element with the custom attribute [data-header]

window.addEventListener("scroll", function () {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});
// Adds a scroll event listener on the window
// If the page is scrolled more than 50px vertically, adds "active" class to the header
// Otherwise, removes the "active" class
