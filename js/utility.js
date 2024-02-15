function getInnerText(id) {
  const elementInnerText = document.getElementById(id).innerText;
  return elementInnerText;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function convertStringToNumber(value) {
  return parseFloat(value);
}
