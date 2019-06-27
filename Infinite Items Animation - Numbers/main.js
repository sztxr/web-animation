const items = document.querySelectorAll('.item');
const container = document.querySelector('#container');

const h_range = [0, 360];
const s_range = [0, 50];
const l_range = [60, 100];
const a_range = [1, 1];

const randomColorOne = getRandomColor(h_range, s_range, l_range, a_range);
const randomColorTwo = getRandomColor(h_range, s_range, l_range, a_range);

function setup() {
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    item.displayData = {
      one: getRandomNumber(0, 10),
      oneColor: randomColorOne,
      two: getRandomNumber(0, 10),
      twoColor: randomColorTwo
    };
    setContent(item);
  }
}
setup();

function duplicateAndGenerate(e) {
  let item = e.target;

  let twoColor = getRandomColor(h_range, s_range, l_range, a_range);

  item.displayData = {
    one: item.displayData.two,
    oneColor: item.displayData.twoColor,
    two: getRandomNumber(0, 10),
    twoColor: twoColor
  };
  setContent(item);
}

function setContent(item) {
  item.children[0].innerText = item.displayData.one;
  item.children[0].style.backgroundColor = item.displayData.oneColor.hslaValue;
  item.children[1].innerText = item.displayData.two;
  item.children[1].style.backgroundColor = item.displayData.twoColor.hslaValue;
}

function getRandomNumber(low, high) {
  let r = Math.floor(Math.random() * (high - low + 1)) + low;
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

container.addEventListener('animationiteration', duplicateAndGenerate, false);
