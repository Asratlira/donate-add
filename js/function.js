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
