// TODO: index_old.jsの中身をコンポーネントに移行する

// import "styles/index.scss";
// import { MDCTopAppBar } from "@material/top-app-bar/index";
import { MDCRipple } from "@material/ripple";

import Swiper from "swiper";

// window.onload = function () {
export const global_onload = function () {
  // // Instantiation;
  // const topAppBarElement = document.querySelector(".mdc-top-app-bar");
  // if (topAppBarElement) {
  //   const topAppBar = new MDCTopAppBar(topAppBarElement);
  // }

  // Ripple for button
  actMDCRipple(".mdc-button");
  actMDCRipple(".menu.mobile a");

  // menu
  const menuOpen = document.querySelector(".menu.mobile .menu__open");
  if (menuOpen)
    menuOpen.addEventListener("click", function () {
      document.querySelector("nav.mobile").classList.add("open");
      document.querySelector(".menu.mobile .menu__open").style.display = "none";
      document.querySelector(".menu.mobile .menu__close").style.display =
        "inline-block";
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    });
  const menuClose = document.querySelector(".menu.mobile .menu__close");
  if (menuClose)
    menuClose.addEventListener("click", function () {
      document.querySelector("nav.mobile").classList.remove("open");
      document.querySelector(".menu.mobile .menu__open").style.display =
        "inline-block";
      document.querySelector(".menu.mobile .menu__close").style.display =
        "none";
      document.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    });
  const menus = document.querySelectorAll("nav.mobile a");
  if (menus) {
    let menu_ie = Array.prototype.slice.call(menus, 0);
    menu_ie.forEach(function (e) {
      e.addEventListener("click", function () {
        menuClose.dispatchEvent(new Event("click"));
      });
    });
  }

  // loading
  if (document.getElementById("loading"))
    document.getElementById("loading").style.display = "none";
  if (document.querySelector("#content .page"))
    document.querySelector("#content .page").classList.add("select");

  // Init swiper
  new Swiper(".swiper-container", {
    effect: "fade",
    loop: true,
    speed: 700,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    fadeEffect: {
      crossFade: true,
    },
    on: {
      init: function () {
        let images = Array.prototype.slice.call(
          document.querySelectorAll(".swiper-container img"),
          0
        );
        images.forEach(function (image) {
          image.style.display = "block";
        });
      },
    },
  });
};

function actMDCRipple(selector) {
  let elements = document.querySelectorAll(selector);
  if (elements) {
    elements = Array.prototype.slice.call(elements, 0);
    elements.forEach(function (e) {
      new MDCRipple(e);
    });
  }
}

/**
 * https://q-az.net/without-jquery-height-width-offset-scrolltop/
 * @param {*} e
 */
function offsetTop(e) {
  var rect = e.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}
