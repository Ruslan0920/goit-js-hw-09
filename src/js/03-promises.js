import Notiflix from 'notiflix';

const inputDelay = document.querySelector('[name="delay"]');
console.log(inputDelay);
console.log(inputDelay.value);
const inputStep = document.querySelector('[name="step"]');
console.log(inputStep);
const inputAmount = document.querySelector('[name="amount"]');
console.log(inputAmount);
const buttonCreate = document.querySelector('[type="submit"]');
buttonCreate.addEventListener('click', onSubmitForm);
console.log(buttonCreate);

  // inputAmount.value = position;
  // inputStep.value = delay;

function onSubmitForm() {
  for (let i = 0; i < inputAmount.value; i = +1){
    console.log(i);
    let position = i + 1;
    const delays = Number(inputDelay.value) + inputStep.value * i;
       
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
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    
    if (shouldResolve) {
      // Fulfill
      resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`));
    } else {
      // Reject
      reject(
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`)
      );
    }
  });
  return promise;
}

// createPromise(3, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
