let = isScrolling = false;
let listItems = document.querySelectorAll("#mainContent ol li");
let firstBox = document.querySelector("#firstBox");
let secondBox = document.querySelector("#secondBox");

// Listening to the Scroll Event and throttle Scroll
function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(() => {
            handleScroll(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

function handleScroll(e) {
    if (isPartiallyVisible(firstBox)) {
        firstBox.classList.add("active");
        document.body.classList.add("colorOne");
        document.body.classList.remove("colorTwo");
    } else {
        document.body.classList.remove("colorOne");
        document.body.classList.remove("colorTwo");
    }

    if (isFullyVisible(secondBox)) {
        secondBox.classList.add("active");
        document.body.classList.add("colorTwo");
        document.body.classList.remove("colorOne");
    }

    for (let i = 0; i < listItems.length; i++) {
        let listItem = listItems[i];
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("active");
        } else {
          listItem.classList.remove("active");
        }
    }
}

// Detecting Whether an Element is Partially Visible
function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

// Detecting Whether an Element is Fully Visible
function isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

window.addEventListener('scroll', throttleScroll, false);
document.addEventListener("DOMContentLoaded", handleScroll, false);