// import flatpickr from "flatpickr";
// console.log(flatpickr);

// import "flatpickr/dist/flatpickr.min.css";

// import Notiflix from 'notiflix';

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

const timer = {
    start() {
        const startTime = Date.now();
        console.log(startTime);

        // const idTime = setInterval(() => {
        //     currentTime = Date.now();
        //     console.log(currentTime);
        //     console.log(currentTime - startTime);
        // }, 2000);
        // clearInterval(idTime)
    }
}
timer.start()

// const selectDateInput = flatpickr("#datetime-picker", {
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

// // const options = {
// //   enableTime: true,
// //   time_24hr: true,
// //   defaultDate: new Date(),
// //   minuteIncrement: 1,
// //   onClose(selectedDates) {
// //     console.log(selectedDates[0]);
// //   },
// // };

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}