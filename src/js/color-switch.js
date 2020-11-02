import { colors } from "./colors.js";

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
}

const DELAY = 1000;
let intervalId = null;

refs.stopBtn.disabled = false;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

const switcher = () => {
     refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};

 function randomIntegerFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtnClick() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    intervalId = setInterval(switcher, DELAY);
};

function onStopBtnClick() {
     refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(intervalId);
};

