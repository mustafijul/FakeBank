// console.log("console from deposit");
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   console.log("deposit button clicked");
  const depositField = document.getElementById("Deposit-id");
  const depositValue = parseFloat(depositField.value);
  console.log(depositValue);

  const depoTotal = document.getElementById("deposit-total");
  // console.log();
  const previousDepoTotal = parseFloat(depoTotal.innerText);

  console.log(previousDepoTotal);
  depoTotal.innerText = depositValue + previousDepoTotal;

  // balance logics
  const previousBalanceFieldAmount = document.getElementById("balance-total");
  const previousBalanceAmount = parseFloat(
    previousBalanceFieldAmount.innerText
  );

  const previousBalanceInputFieldAmount = document.getElementById("Deposit-id");

  const inputBalanceAmount = parseFloat(previousBalanceInputFieldAmount.value);

  const totalBalanceAmount = previousBalanceAmount + inputBalanceAmount;

  previousBalanceFieldAmount.innerText = parseFloat(totalBalanceAmount);
});

// withdraw calculation
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // console.log("withdraw button clicked");
  // withdraw increase logic
  const withdrawInputField = document.getElementById("Withdraw-id");
  const withdrawInputFieldValue = parseFloat(withdrawInputField.value);

  const withdrawText = document.getElementById("withdraw-total");
  const withdrawTextValue = parseFloat(withdrawText.innerText);

  const currentTotalWithdraw = withdrawTextValue + withdrawInputFieldValue;
  withdrawText.innerText = currentTotalWithdraw;


    // Balance after withdraw

    const BalanceAmount = document.getElementById("balance-total");
    const floatBalanceAmount = parseFloat(BalanceAmount.innerText);

    const withdrawBalanceFieldAmount = document.getElementById('Withdraw-id');
    const floatWithdrawAmount = parseFloat(withdrawBalanceFieldAmount.value);

    const totalBalanceAfterWithdraw = floatBalanceAmount - floatWithdrawAmount;


    BalanceAmount.innerText = totalBalanceAfterWithdraw













});
