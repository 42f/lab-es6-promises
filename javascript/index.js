// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          document.querySelector('#mashedPotatoesImg').removeAttribute("hidden");
        })
      })
    })
  })
});

// Iteration 2 - using promises
function appendSteakElement(step) {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`
}

obtainInstruction('steak', 0)
  .then((step) => {
    appendSteakElement(step);
    return obtainInstruction('steak', 1);
  })
  .then((step) => {
    appendSteakElement(step);
    return obtainInstruction('steak', 2);
  })
  .then((step) => {
    appendSteakElement(step);
    return obtainInstruction('steak', 3);
  })
  .then((step) => {
    appendSteakElement(step);
    return obtainInstruction('steak', 4);
  })
  .then((step) => {
    appendSteakElement(step);
    return obtainInstruction('steak', 5);
  })
  .then((step) => {
    appendSteakElement(step);
    return obtainInstruction('steak', 6);
  })
  .then((step) => {
    appendSteakElement(step);
    return obtainInstruction('steak', 7);
  })
  .then((step) => {
    appendSteakElement(step);
    document.querySelector('#steakImg').removeAttribute("hidden");
  });

// Iteration 3 using async/await

async function makeBroccoli() {
  const broccoliElement = document.querySelector("#broccoli");
  let err = false;
  let step = 0;
  while (!err) {
    await obtainInstruction('broccoli', step++)
      .then((step) => { broccoliElement.innerHTML += `<li>${step}</li>` })
      .catch(() => { err = true })
  }
  document.querySelector('#broccoliImg').removeAttribute("hidden");
}

makeBroccoli();


// Bonus 2 - Promise all
async function makeBrusselsSprouts() {
  const brusselsSproutsElement = document.querySelector("#brusselsSprouts");
  let err = false;
  let step = 0;
  while (!err) {
    await obtainInstruction('brusselsSprouts', step++)
      .then((step) => { brusselsSproutsElement.innerHTML += `<li>${step}</li>` })
      .catch(() => { err = true })
  }
  document.querySelector('#brusselsSproutsImg').removeAttribute("hidden");
}

makeBrusselsSprouts();


