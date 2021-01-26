const num1 = document.querySelector("#num_1");
const num2 = document.querySelector("#num_2");
const output = document.querySelector("#answer");
let x = num_1;
let y = num_2;
document.querySelector("#calculator").addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(e.submitter);

  if (e.submitter.id == "add") {
    output.value = parseInt(x) + parseInt(y);
  }

  if (e.submitter.id == "subtract") {
    output.value = parseInt(x) - parseInt(y);
  }

  if (e.submitter.id == "multiply") {
    output.value = parseInt(x) * parseInt(y);
  }

  if (e.submitter.id == "divide") {
    output.value = parseInt(x) / parseInt(y);
  }
});

// const calcontainer = document.querySelector("#secondrow");
// const calcontainer = document.querySelector("#thirdrow");
// const calcontainer = document.querySelector("#fourthrow");

// calcontainer.addEventListener("click", function (e) {
//   console.log(e.target);
// });
// function add() {
//   num1 = document.querySelector("#num_1").value;
//   num2 = document.querySelector("#num_2").value;
//   document.querySelector("#answer").innerHTML = num1 + num2;
// }
// function subtract() {
//   num1 = document.querySelector("#num_1").value;
//   num2 = document.querySelector("#num_2").value;
//   document.querySelector("#answer").innerHTML = num1 - num2;
// }

// function multiplyBy() {
//   num1 = document.querySelector("#num-1").value;
//   num2 = document.querySelector("#num-2").value;
//   document.querySelector("#answer").innerHTML = num1 * num2;
// }
// function divideBy() {
//   num1 = document.querySelector("#num-1").value;
//   num2 = document.querySelector("#num-2").value;
//   document.querySelector("#answer").innerHTML = num1 / num2;
// }

// const calcontainer = document.querySelector("#firstrow");
// const calcontainer = document.querySelector("#secondrow");
// const calcontainer = document.querySelector("#thirdrow");
// const calcontainer = document.querySelector("#fourthrow");

// calcontainer.addEventListener("click", function (e) {
//   console.log(e.target);
// });
