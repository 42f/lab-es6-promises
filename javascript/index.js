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


function appendElement(id, step) {
  document.querySelector(id).innerHTML += `<li>${step}</li>`
}

function unhideElement(id) {
  document.querySelector(id).removeAttribute("hidden");
}

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
obtainInstruction('steak', 0)
  .then((step) => {
    appendElement('#steak', step);
    return obtainInstruction('steak', 1);
  })
  .then((step) => {
    appendElement('#steak', step);
    return obtainInstruction('steak', 2);
  })
  .then((step) => {
    appendElement('#steak', step);
    return obtainInstruction('steak', 3);
  })
  .then((step) => {
    appendElement('#steak', step);
    return obtainInstruction('steak', 4);
  })
  .then((step) => {
    appendElement('#steak', step);
    return obtainInstruction('steak', 5);
  })
  .then((step) => {
    appendElement('#steak', step);
    return obtainInstruction('steak', 6);
  })
  .then((step) => {
    appendElement('#steak', step);
    return obtainInstruction('steak', 7);
  })
  .then((step) => {
    appendElement('#steak', step);
    unhideElement('#steakImg')
  });

// Iteration 3 using async/await
// try / catch block approach
async function makeBroccoli() {
  let err = false;
  let stepNb = 0;
  try {
    while (!err) {
      const step = await obtainInstruction('broccoli', stepNb++);
      appendElement('#broccoli', step);
    }
  } catch {
    unhideElement('#broccoliImg')
  }
}

makeBroccoli();


// Bonus 2 - Promise all
// then catch chaining approach
async function makeBrusselsSprouts() {
  let err = false;
  let step = 0;
  while (!err) {
    await obtainInstruction('brusselsSprouts', step++)
    .then((step) => { appendElement('#brusselsSprouts', step) })
    .catch(() => { err = true })
  }
  unhideElement('#brusselsSproutsImg')
}

makeBrusselsSprouts();


