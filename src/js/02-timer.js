import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

// // const options = {
// //   enableTime: true,
// //   time_24hr: true,
// //   defaultDate: new Date(),
// //   minuteIncrement: 1,
// //   onClose(selectedDates) {
// //     console.log(selectedDates[0]);
// //   },
// // };

const inputCalendar = document.querySelector('#datetime-picker');
const clickStartButton = document.querySelector('button[data-start]');
const valueData = document.querySelector('span[data-days]');
const valueHours = document.querySelector('span[data-hours]');
const valueMinutes = document.querySelector('span[data-minutes]');
const valueSeconds = document.querySelector('span[data-seconds]');

clickStartButton.addEventListener('click', () => {
  timer.start();
});

clickStartButton.setAttribute('disabled', 'disabled');

const currentTime = Date.now();

const timer = {
  start() {
    const startTime = selectDateInput.selectedDates[0];

const timerId = setInterval(() => {
      const currentTime = Date.now();
      // console.log(currentTime);
      const deltaTime = startTime - currentTime;
      // console.log(deltaTime);
      const time = convertMs(deltaTime);
      // console.log(time);

      updateClock(time);
}, 1000);
    // clearInterval(timerId);
  },
};

const selectDateInput = flatpickr(inputCalendar, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      clickStartButton.removeAttribute('disabled', 'disabled');
    }
    
  },
});
console.log(selectDateInput.selectedDates[0]);

function updateClock({ days, hours, minutes, seconds }) {
  valueData.textContent = `${days}`;
  valueHours.textContent = `${hours}`;
  valueMinutes.textContent = `${minutes}`;
  valueSeconds.textContent = `${seconds}`;
  // console.log(valueSeconds);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}