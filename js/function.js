function getInputById(id) {
  const inputValue = document.getElementById(id).value;
  const returnValue = parseFloat(inputValue);
  return returnValue;
}
function getInputTextById(id) {
  const inputText = document.getElementById(id).innerText;
  const returnText = parseFloat(inputText);
  return returnText;
}
function showSection(id) {
  document.getElementById("donate-form").classList.add("hidden");
  document.getElementById("transaction-form").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const currentTime = `${hours}:${minutes}:${seconds}`;
  return currentTime;
}
