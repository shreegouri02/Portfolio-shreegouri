'use strict';

/**
 * add evenlistener on multipler elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/**
 * preloader
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    this.document.body.classList.add("loaded");
});

/**
 * MOBILE NAV TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");

const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);

/**
 * HEADER
 * 
 * active window when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
    window.scrollY > 50 ?
        header.classList.add("active")
        : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);