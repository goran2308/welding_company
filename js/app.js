/* This code controls the navbar toggle button */
var hamburger = document.getElementById('burger');
var navButton = document.querySelector('.aside');
let toggleStatus = false;

function showNav() {
    navButton.style.display = 'flex';
    toggleStatus = true;
}

function hideNav() {
    navButton.style.display = 'none';
    toggleStatus = false;
}

function toggle() {
    if(toggleStatus === false) {
        return showNav();
    } else {
        return hideNav();
    }
}

hamburger.addEventListener('click', toggle);


/* This code add animation to the hamburger menu */
var firstLine = document.querySelector('.long-line');
var secondLine = document.querySelector('.middle-line');
var thirdLine = document.querySelector('.short-line');

function mouseOver() {
    firstLine.style.animation = "ham-anim .4s ease-in-out 2";
    secondLine.style.animation = "ham-anim .5s ease-in-out 2";
    thirdLine.style.animation = "ham-anim .3s ease-in-out 2";
}

function mouseOut() {
    firstLine.style.animation = "none";
    secondLine.style.animation = "none";
    thirdLine.style.animation = "none";
}

hamburger.addEventListener('mouseover', mouseOver);
hamburger.addEventListener('mouseout', mouseOut);