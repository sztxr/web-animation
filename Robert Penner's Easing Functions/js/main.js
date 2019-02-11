const mainCanvas = document.getElementById("canvas");
const mainContext = mainCanvas.getContext('2d');

let canvasWidth = mainCanvas.width;
let canvasHeight = mainCanvas.height;

let requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

let iteration = 0;
let totalIterations = 200;
let easingValue;
let moveRight =true;

function drawCircle() {
    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

    // color in the background
    mainContext.fillStyle = "#000000";
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

    // draw the circle
    mainContext.beginPath();

    easingValue = easeInOutExpo(iteration, -100, 650, totalIterations)

    let radius = 100;

    if (moveRight) {
        easingValue = easeInOutExpo(iteration, -100, 650, totalIterations);
    } else {
        easingValue = easeInExpo(iteration, 650, -750, totalIterations);
    }

    mainContext.arc(easingValue, 225, radius, 0, Math.PI * 2, false);
    mainContext.closePath();

    // color in the circle
    mainContext.fillStyle = "#ffff00";
    mainContext.fill();

    if (iteration < totalIterations) {
        iteration++;
    } else {
        iteration = 0;
        moveRight = !moveRight;
    }

    requestAnimationFrame(drawCircle);
}
drawCircle();