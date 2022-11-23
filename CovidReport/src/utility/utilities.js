import {BLUE, LIGHTGREEN, RED} from '../theme/color';

export function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
}

export function convertIntoPercentage(affected, recovered) {
  return Math.trunc(((affected - recovered) / recovered) * 100);
}

export function generateColor() {
  const randomColor = Math.floor(Math.random() * 16000000)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
}

export function numberWithComma(number) {
  return number.toLocaleString();
}

export function setStrokeColor(id) {
  let progressBarColor;
  switch (id) {
    case '1':
      progressBarColor = RED;
      break;
    case '2':
      progressBarColor = LIGHTGREEN;
      break;
    default:
      progressBarColor = BLUE;
  }
  return progressBarColor;
}

export function recoveryPercentage(recovered, affected) {
  return ((recovered / affected) * 100).toFixed(2);
}
