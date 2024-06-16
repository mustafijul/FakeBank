// console.log("console from deposit");
document.getElementById("btn-deposit").addEventListener("click", function () {
//   console.log("deposit button clicked");
const depositField = document.getElementById("Deposit-id");
const depositValue = depositField.value;
console.log(depositValue);

const depoTotal = document.getElementById("deposit-total");
depoTotal.innerText = depositValue;
});

// withdraw btn
// document.getElementById("btn-withdraw").addEventListener("click", function () {
//   console.log("Withdraw button clicked");
// });
