import './sass/common.scss';
import {MDCTopAppBar} from '@material/top-app-bar/index';

import Swiper from 'swiper';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);



var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    loop: true,
    speed: 700,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    fadeEffect: {
        crossFade: true
    },
    on: {
        init: function () {
            let images = document.querySelectorAll('.swiper-container img');
            images.forEach(function(image) { image.style.display = 'block' });
        },
    },
});
swiper.on('init', function() {

});