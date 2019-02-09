let circle = document.querySelector("#bigCircle");
let square = document.querySelector("#square");
let pentagon = document.querySelector("#pentagon");

// Helper Function for Setting the Position
function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

// Getting the Scroll Position
let xScrollPosition;
let yScrollPosition;

function scrollLoop() {
    // Current scroll position
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    // Adjust position of elements
    setTranslate(0, yScrollPosition * -0.2, circle);
    setTranslate(0, yScrollPosition * -1.5, square);
    setTranslate(0, yScrollPosition * .5, pentagon);

    requestAnimationFrame(scrollLoop);
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);