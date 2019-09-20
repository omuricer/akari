import "./sass/index.scss";
import { MDCTopAppBar } from "@material/top-app-bar/index";
import { MDCRipple } from "@material/ripple";

import Swiper from "swiper";

// Instantiation
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
if (topAppBarElement) {
  const topAppBar = new MDCTopAppBar(topAppBarElement);
}

const buttonElements = document.querySelectorAll(".mdc-button");
if (buttonElements) {
  let a = Array.prototype.slice.call(buttonElements);
  a.forEach(element => {
    new MDCRipple(element);
  });
}

window.onload = function() {
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
  // new Swiper(".swiper-container");
};

