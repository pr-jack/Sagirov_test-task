'use strict';

var navMain = document.querySelector('.main-nav__list');
var navButtonOpen = document.querySelector('.main-nav__button');
var navButtonClose = document.querySelector('.main-nav__toggle');
var headerBurger = document.querySelector('.main-nav__burger');

  navButtonOpen.addEventListener('click', function() {

    navMain.classList.remove('main-nav__list--closed');
    navMain.classList.add('main-nav__list--opened');
    navButtonClose.classList.add('main-nav__toggle--opened');
    headerBurger.classList.add('main-nav__burger--hidden');
  });

  navButtonClose.addEventListener('click', function() {

    navMain.classList.remove('main-nav__list--opened');
    navMain.classList.add('main-nav__list--closed');
    navButtonClose.classList.remove('main-nav__toggle--opened');
    headerBurger.classList.remove('main-nav__burger--hidden');
  });
