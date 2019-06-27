const letters = document.querySelectorAll('.letter');
const container = document.querySelector('#container');

const h_range = [0, 360];
const s_range = [0, 50];
const l_range = [60, 100];
const a_range = [1, 1];

function setup() {
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];

    const randomColor = getRandomColor(h_range, s_range, l_range, a_range);

    letter.displayData = {
      one: randomColor,
      two: randomColor
    };
    setContent(letter);
    setAnimation(letter);
  }
}
setup();

function loopLetter(e) {
  let item = e.target;

  item.displayData = {
    one: item.displayData.two,
    two: getRandomColor(h_range, s_range, l_range, a_range)
  };
  setContent(item);
}

function setContent(item) {
  item.children[0].style.backgroundColor = item.displayData.one.hslaValue;
  item.children[1].style.backgroundColor = item.displayData.two.hslaValue;
}

function setAnimation(item) {
  item.style.animationDelay = getRandomNumber(0, 500) / 500 + "s";
  item.style.animationDuration = getRandomNumber(20, 40) / 10 + "s";
}

function getRandomNumber(low, high) {
  var r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}

function getRandomColor(h, s, l, a) {
  var hue = getRandomNumber(h[0], h[1]);
  var saturation = getRandomNumber(s[0], s[1]);
  var lightness = getRandomNumber(l[0], l[1]);
  var alpha = getRandomNumber(a[0] * 100, a[1] * 100) / 100;

  return {
    h: hue,
    s: saturation,
    l: lightness,
    a: alpha,
    hslaValue: getHSLAColor(hue, saturation, lightness, alpha)
  };
}

function getHSLAColor(h, s, l, a) {
  return `hsl(${h}, ${s}%, ${l}%, ${a})`;
}

container.addEventListener('animationiteration', loopLetter, false);
