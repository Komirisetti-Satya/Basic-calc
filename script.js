function addFunction() {
 let a = Number(document.querySelector("#input1").value);
  let b = Number(document.querySelector("#input2").value);
  let result = a+b;
  document.querySelector("#symbol").innerHTML = " + ";
  document.querySelector("#result").innerHTML = result;
}

function minusFunction() {
  let a = Number(document.querySelector("#input1").value);
  let b = Number(document.querySelector("#input2").value);
  let result = a-b;
  document.querySelector("#symbol").innerHTML = " - ";
  document.querySelector("#result").innerHTML = result;
}

function mulFunction() {
  let a = Number(document.querySelector("#input1").value);
  let b = Number(document.querySelector("#input2").value);
  let result = a*b;
  document.querySelector("#symbol").innerHTML = " * ";
  document.querySelector("#result").innerHTML = result;
}

function divFunction() {
  let a = Number(document.querySelector("#input1").value);
  let b = Number(document.querySelector("#input2").value);
  let result = a/b;
  document.querySelector("#symbol").innerHTML = " / ";
  document.querySelector("#result").innerHTML = result;
}