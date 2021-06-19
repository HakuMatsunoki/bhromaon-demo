/* script.js */
const BTNS = document.querySelectorAll('.btn');
const H1 = document.querySelector('h1');
const H2 = document.querySelector('h2');
const H4S = document.querySelectorAll('h4');
const PS = document.querySelectorAll('p');

window.addEventListener('scroll', throttle, false);
window.addEventListener('DOMContentLoaded', animate, false);

let isScrolling = false;

function throttle() {
    if (!isScrolling) {
        window.requestAnimationFrame(function() {
            animate();
            isScrolling = false;
        });
    }
    isScrolling = true;
}


function animate() {
    for (let item of BTNS) {
        (isVisible(item)) ? item.classList.add('btn--active') : item.classList.remove('btn--active');
    }

    for (let item of H4S) {
        (isVisible(item)) ? item.classList.add('h4--active') : item.classList.remove('h4--active');
    }

    for (let item of PS) {
        (isVisible(item)) ? item.classList.add('p--active') : item.classList.remove('p--active');
    }

    (isVisible(H1)) ? H1.classList.add('h1--active') : H1.classList.remove('h1--active');
    (isVisible(H2)) ? H2.classList.add('h2--active') : H2.classList.remove('h2--active');

}



function isVisible(item) {
    let elemRect = item.getBoundingClientRect();
    let top = elemRect.top;
    let bottom = elemRect.bottom;
    let height = elemRect.height;

    return ((top + height >= 0) && (bottom <= height + window.innerHeight));
}