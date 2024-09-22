function getInputValue(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

document.getElementById("calculate").addEventListener("click", function () {
  const income = parseFloat(getInputValue("income"));
  const software = parseFloat(getInputValue("software"));
  const course = parseFloat(getInputValue("courses"));
  const internet = parseFloat(getInputValue("internet"));
  const totalExpenses = software + course + internet;
  const remainingBalance = income - totalExpenses;

  document.getElementById("total-expenses").innerText = totalExpenses;
  document.getElementById("balance").innerText = remainingBalance;

  document.getElementById("results").classList.remove("hidden");
});

document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const inputSavingsPercentage = parseFloat(getInputValue("savings"));
    const income = parseFloat(getInputValue("income"));
    const software = parseFloat(getInputValue("software"));
    const course = parseFloat(getInputValue("courses"));
    const internet = parseFloat(getInputValue("internet"));
    const totalExpenses = software + course + internet;
    const remainingBalance = income - totalExpenses;

    const savings = (remainingBalance * inputSavingsPercentage) / 100;

    document.getElementById("savings-amount").innerText = savings;
    const finalRemainingBalance = remainingBalance - savings;
    document.getElementById("remaining-balance").innerText =
      finalRemainingBalance;
  });
