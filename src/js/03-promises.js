import Notiflix from 'notiflix';

// const inputDelay = document.querySelector('[name="delay"]');
// console.log(inputDelay);
// console.log(inputDelay.value);
// const inputStep = document.querySelector('[name="step"]');
// console.log(inputStep);
// const inputAmount = document.querySelector('[name="amount"]');
// console.log(inputAmount);
// const buttonCreate = document.querySelector('[type="submit"]');
// buttonCreate.addEventListener('click', onSubmitForm);
// console.log(buttonCreate);

const form = document.querySelector(".form");
console.log(form);

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;
  console.log(event.currentTarget.elements);

  
    for (let i = 0; i < amount.value; i+=1){
    console.log(i);
    let position = i + 1;
    const delays = Number(delay.value) + step.value * i;
       
createPromise(position, delays)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}


function createPromise(position, delay) {
  // inputAmount.value = position;
  // inputStep.value = delay;
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
setTimeout(() => {
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
}, delay);
  });

}

// createPromise(3, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
