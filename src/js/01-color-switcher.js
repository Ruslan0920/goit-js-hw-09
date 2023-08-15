const clickStartButton = document.querySelector('button[data-start]');
clickStartButton.addEventListener('click', changeBodyColor);
const clickStopButton = document.querySelector('button[data-stop]');
clickStopButton.addEventListener('click', stopChangeBodyColor);

let timerId = null;

function changeBodyColor() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    clickStartButton.setAttribute("disabled", "disabled");
}

function stopChangeBodyColor() {
    clearInterval(timerId);
    clickStartButton. removeAttribute("disabled", "disabled");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}