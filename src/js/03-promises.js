import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onFormSubmitter);

let delayInteger;
let stepInteger;
let amountInteger;

const notifyOptions = {
  position: 'right-top',
  backOverlay: true,
  clickToClose: false,
  closeButton: false,
};

function onFormSubmitter(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  delayInteger = Number.parseInt(delay.value);
  stepInteger = Number.parseInt(step.value);
  amountInteger = Number.parseInt(amount.value);

  filterPromises();
  event.currentTarget.reset();
}

function createPromise(position, delayInteger) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delayInteger });
      } else {
        reject({ position, delayInteger });
      }
    }, delayInteger);
  });
}

function filterPromises() {
  for (let i = 0; i < amountInteger; i += 1) {
    createPromise(i + 1, delayInteger)
      .then(({ position, delayInteger }) => {
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delayInteger}ms`,
          notifyOptions
        );
      })
      .catch(({ position, delayInteger }) => {
        Notify.failure(
          `❌ Rejected promise ${position} in ${delayInteger}ms`,
          notifyOptions
        );
      });
    delayInteger += stepInteger;
  }
}
