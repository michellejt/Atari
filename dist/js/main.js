//start by targetting dom elements - query by tag or id or class (menu button is the wrapper, hamburger is the span)
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
//queryselctor selects one element
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
//all selects multiple
const navItems = document.querySelectorAll('.menu-nav__item');

//set variable for show menu (so initially the menu is not shown)
let showMenu = false;
//adding and eventlistener to the menu button with click event
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
//! is a "not" operator
if (!showMenu){
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    //loop through items
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
} else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    showMenu = false;
}
}
