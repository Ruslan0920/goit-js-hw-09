import Notiflix from 'notiflix';

const form = document.querySelector(".form");
console.log(form);

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;
  // console.log(event.currentTarget.elements);
    
    for (let i = 0; i < amount.value; i+=1){
    console.log(i);
      const position = i + 1;
      console.log(position);
      const delays = Number(delay.value) + step.value * i;
      console.log(delay.value);
      console.log(step.value);
       
createPromise(position, delays)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
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
