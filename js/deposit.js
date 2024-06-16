// console.log("console from deposit");
document.getElementById("btn-deposit").addEventListener("click", function () {
//   console.log("deposit button clicked");
const depositField = document.getElementById("Deposit-id");
const depositValue = parseInt(depositField.value);
console.log(depositValue);

const depoTotal = document.getElementById("deposit-total");
// console.log();
const previousDepoTotal = parseInt(depoTotal.innerText);

console.log(previousDepoTotal);
depoTotal.innerText = depositValue + previousDepoTotal;
});

// withdraw btn
// document.getElementById("btn-withdraw").addEventListener("click", function () {
//   console.log("Withdraw button clicked");
// });
