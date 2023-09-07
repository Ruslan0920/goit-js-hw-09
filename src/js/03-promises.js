const inputDelay = document.querySelector('[name="delay"]');
console.log(inputDelay);
console.log(inputDelay.value);
const inputStep = document.querySelector('[name="step"]');
console.log(inputStep);
const inputAmount = document.querySelector('[name="amount"]');
console.log(inputAmount);
const buttonCreate = document.querySelector('[type="submit"]');
buttonCreate.addEventListener('click', createPromise);
console.log(buttonCreate);



function createPromise(position, delay) {
  inputAmount.value = position;
  inputStep.value = delay;
  const promise = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve(console.log());
      } else {
        // Reject
  reject(console.log())
      }
  })
return promise;
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });