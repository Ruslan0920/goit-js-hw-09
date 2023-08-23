// import flatpickr from "flatpickr";
// console.log(flatpickr);

// import "flatpickr/dist/flatpickr.min.css";

// import Notiflix from 'notiflix';

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
console.log(inputCalendar);
const clickStartButton = document.querySelector('button[data-start]');
console.log(clickStartButton);
const valueData = document.querySelector('span[data-days]');
console.log(valueData);
const valueHours = document.querySelector('span[data-hours]');
console.log(valueHours);
const valueMinutes = document.querySelector('span[data-minutes]');
console.log(valueMinutes);
const valueSeconds = document.querySelector('span[data-seconds]');
console.log(valueSeconds);
// const timerClock = document.querySelector('.value');
// console.log(timerClock);

clickStartButton.addEventListener('click', () => {
timer.start()
})

const timer = {
    start() {
        const startTime =  new Date("2023-08-28");
        console.log(startTime);

        setInterval(() => {
            const currentTime = Date.now();
            // console.log(currentTime);
            const deltaTime = startTime - currentTime;
            // console.log(deltaTime);
            const time = convertMs(deltaTime);

            updateClock(time);

            // const { days, hours, minutes, seconds } = convertMs(deltaTime);
            // console.log(`${days}:${hours}:${minutes}:${seconds}`);
        }, 1000);
    }
}

function updateClock({ days, hours, minutes, seconds }) {
    valueData.textContent = `${days}`;
    valueHours.textContent = `${hours}`;
    valueMinutes.textContent = `${minutes}`;
    valueSeconds.textContent = `${seconds}`;
    // console.log(valueSeconds);
}

function pad(value) {
    return String(value).padStart(2, '0')
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


//  const selectDateInput = flatpickr("#datetime-picker", {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// });
// console.log(selectDateInput.toString);

// const timer = (targetDate) => {
//     setInterval(() => {
//         renderTimer(new Date(targetDate).getTime())
//     }, 1000)
// };
// console.log(timer);

// const renderTimer = (string) => {
//     inputCalendar.innerText = string;
// // console.log(renderTimer);
// }

// timer(new Date('2023/08/24'));
// console.log(timer);

// const delta = new Date();
// console.log(delta);