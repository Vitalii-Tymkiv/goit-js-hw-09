import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let startTime;

const timerRef = document.querySelector('.timer');
const startBtnRef = document.querySelector('[data-start]');
startBtnRef.disabled = true;

const flatPickroptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startTime = selectedDates[0];
    if (startTime.getTime() > Date.now()) {
      startBtnRef.disabled = false;
    } else {
      Notify.failure(
        'Please choose a date in the future!',
        timer.notifyOptions
      );
      startBtnRef.disabled = true;
    }
  },
};
flatpickr('#datetime-picker', flatPickroptions);

const timer = {
  intervalId: null,
  refs: {},
  notifyOptions: {
    position: 'center-top',
    backOverlay: true,
    clickToClose: true,
    closeButton: true,
  },

  start(rootSelector, deadline) {
    Notify.success('Відлік почався', this.notifyOptions);
    startBtnRef.disabled = true;
    this.getRefs(rootSelector);
    this.intervalId = setInterval(() => {
      const diff = deadline.getTime() - Date.now();
      startBtnRef.disabled = true;
      if (diff <= 1000) {
        clearInterval(this.intervalId);
        Notify.success('The deadline has arrived!', this.notifyOptions);
      }

      const data = this.convertMs(diff);

      Object.entries(data).forEach(([name, value]) => {
        this.refs[name].textContent = this.addLeadinZero(value);
      });
    }, 1000);
  },

  getRefs(rootSelector) {
    this.refs.days = rootSelector.querySelector('[data-days]');
    this.refs.hours = rootSelector.querySelector('[data-hours]');
    this.refs.minutes = rootSelector.querySelector('[data-minutes]');
    this.refs.seconds = rootSelector.querySelector('[data-seconds]');
  },
  convertMs(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  },
  addLeadinZero(value) {
    return String(value).padStart(2, '0');
  },
};

startBtnRef.addEventListener('click', () => timer.start(timerRef, startTime));

/////////////////////////////////////////////////////////////////////
