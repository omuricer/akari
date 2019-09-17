import "./sass/index.scss";
import { MDCTopAppBar } from "@material/top-app-bar/index";
import { MDCRipple } from "@material/ripple";

import Swiper from "swiper";

window.onload = function() {
  // Instantiation
  const topAppBarElement = document.querySelector(".mdc-top-app-bar");
  if (topAppBarElement) {
    const topAppBar = new MDCTopAppBar(topAppBarElement);
  }

  // Ripple for button
  actMDCRipple(".mdc-button");
  actMDCRipple(".menu.mobile a");

  // Init swiper
  var swiper = new Swiper(".swiper-container", {
    effect: "fade",
    loop: true,
    speed: 700,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    },
    fadeEffect: {
      crossFade: true
    },
    on: {
      init: function() {
        let images = Array.prototype.slice.call(
          document.querySelectorAll(".swiper-container img"),
          0
        );
        images.forEach(function(image) {
          image.style.display = "block";
        });
      }
    }
  });

  // menu
  const menuOpen = document.querySelector(".menu__open");
  menuOpen.addEventListener("click", function() {
    const menu = document.querySelector(".menu.mobile__inner");
    menu.style.display="block";
  });
  const menuClose = document.querySelector(".menu__close");
  menuClose.addEventListener("click", function() {
    const menu = document.querySelector(".menu.mobile__inner");
    menu.style.display="none";
  });
};

function actMDCRipple(selector) {
  let elements = document.querySelectorAll(".mdc-button");
  if (elements) {
    elements = Array.prototype.slice.call(elements, 0);
    elements.forEach(function(e) {
      new MDCRipple(e);
    });
  }
}
