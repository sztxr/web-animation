let requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

const bodyElement = document.querySelector('body');
const floatie = document.querySelector('#floatie');

let currentScrollPosition;
let iteration;
let start = false;

function setup() {
    // do something when the up arrow is clicked
    floatie.addEventListener('click', animateToTopOfPage, false);

    // deal with the mouse wheel
    bodyElement.addEventListener('mousewheel', stopEverything, false);
    bodyElement.addEventListener('DOMMouseScroll', stopEverything, false);

    animationLoop();
}
setup();

//
// kick of the animation to scroll your window back to the top
//
function animateScrollToTop(e) {
    currentScrollPosition = getScrollPosition();

    start ^= true;
    iteration = 0;
}

//
// stop the animation and reset start and iteration
//
function stopEverything() {
    start = false;
}

//
// a cross-browser (minus Opera) way of getting the current scroll position
//
function getScrollPosition() {
    if (document.documentElement.scrollTop == 0) {
        document.body.scrollTop;
    } else {
        document.documentElement.scrollTop;
    }
}

//
// kicks into high gear only when the start variable is true
//
function animationLoop() {
    // start is true when you click on the up arrow
    if (start) {
        // where the magic happens
        window.scrollTo(0, easeOutCubic(iteration,
                                        currentScrollPosition,
                                        -currentScrollPosition,
                                        50));

        iteration++;

        // once you reach the top of the document, stop the scrolling
        if (getScrollPosition() <= 0) {
            stopEverything();
        }
    }
    requestAnimationFrame(animationLoop);
}