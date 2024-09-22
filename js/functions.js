function getInputValue(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

function addClassList(id) {
  document
    .getElementById(id)
    .classList.add(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
}

function removeClassList(id) {
  document
    .getElementById(id)
    .classList.remove(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
}
function addHiddenClassList(id) {
  document.getElementById(id).classList.add("hidden");
}

function removeHiddenClassList(id) {
  document.getElementById(id).classList.remove("hidden");
}

function showError(id) {
  document.getElementById(id).classList.remove("hidden");
}
