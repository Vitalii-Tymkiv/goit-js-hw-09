const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
const body = document.querySelector('body');

refs.startBtn.addEventListener('click', bodyBcgColorStarter);
refs.stopBtn.addEventListener('click', bodyBcgColorStopper);

let timerId = null;
refs.stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function bodyBcgColorStarter() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }, 1000);
}
function bodyBcgColorStopper() {
  clearInterval(timerId);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
}

// startBtn.setAttribute('disabled', false);
