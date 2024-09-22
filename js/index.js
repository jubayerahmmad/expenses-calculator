document.getElementById("calculate").addEventListener("click", function () {
  const income = parseFloat(getInputValue("income"));
  const software = parseFloat(getInputValue("software"));
  const course = parseFloat(getInputValue("courses"));
  const internet = parseFloat(getInputValue("internet"));
  const totalExpenses = software + course + internet;
  const remainingBalance = income - totalExpenses;

  if (income <= 0) {
    showError("income-error");
    return;
  }
  if (software <= 0) {
    showError("software-error");
    return;
  }
  if (course <= 0) {
    showError("courses-error");
    return;
  }
  if (internet <= 0) {
    showError("internet-error");
    return;
  }
  if (totalExpenses <= 0) {
    showError("logic-error");
    return;
  }

  if (totalExpenses > income) {
    showError("logic-error");
    return;
  }
  document.getElementById("total-expenses").innerText = totalExpenses;
  document.getElementById("balance").innerText = remainingBalance;

  removeHiddenClassList("results");
});

document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const inputSavingsPercentage = parseFloat(getInputValue("savings"));
    const income = getInputValue("income");
    const software = getInputValue("software");
    const course = getInputValue("courses");
    const internet = getInputValue("internet");
    const totalExpenses = software + course + internet;
    const remainingBalance = income - totalExpenses;

    document.getElementById("remaining-balance").innerText = remainingBalance;
    const savings = (remainingBalance * inputSavingsPercentage) / 100;

    if (savings <= 0) {
      showError("savings-error");
      return;
    }

    document.getElementById("savings-amount").innerText = savings;
    const finalRemainingBalance = remainingBalance - savings;
    document.getElementById("remaining-balance").innerText =
      finalRemainingBalance;
    removeHiddenClassList("results");
    const div = document.createElement("div");
    div.className = "bg-white p-3 my-4 rounded-md border-l-2 border-indigo-500";
    div.innerHTML = `
  <p class="text-xs text-gray-500">${new Date().toLocaleDateString()} </p>
  <p><span class="font-bold">Income</span>: $${income.toFixed(2)} </p>
  <p><span class="font-bold">Expenses</span>: $${totalExpenses.toFixed(2)} </p>
  <p><span class="font-bold">Balance</span>: $${remainingBalance.toFixed(
    2
  )} </p>
  <p><span class="font-bold">Remaining Balance</span>: $${finalRemainingBalance.toFixed(
    2
  )} </p>
  `;
    document.getElementById("history-section").appendChild(div);
  });

const assistantTab = document.getElementById("assistant-tab");
const historayTab = document.getElementById("history-tab");

historayTab.addEventListener("click", function () {
  addClassList("history-tab");
  removeClassList("assistant-tab");
  addHiddenClassList("expense-form");
  removeHiddenClassList("results");
  removeHiddenClassList("history-section");
});

assistantTab.addEventListener("click", function () {
  addClassList("assistant-tab");
  removeClassList("history-tab");
  removeHiddenClassList("expense-form");
  addHiddenClassList("results");
  addHiddenClassList("history-section");
});
