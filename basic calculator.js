function addFunction() {
  let a = parseInt(document.getElementById("input1").value);
  let b = parseInt(document.getElementById("input2").value);
  let answer = a+b;
  document.getElementById("symbol").innerHTML = " + ";
  document.getElementById("result").innerHTML = answer;
}

function minusFunction() {
  let a = parseInt(document.getElementById("input1").value);
  let b = parseInt(document.getElementById("input2").value);
  let answer = a-b;
  document.getElementById("symbol").innerHTML = " - ";
  document.getElementById("result").innerHTML = answer;
}

function mulFunction() {
  let a = parseInt(document.getElementById("input1").value);
  let b = parseInt(document.getElementById("input2").value);
  let answer = a*b;
  document.getElementById("symbol").innerHTML = " * ";
  document.getElementById("result").innerHTML = answer;
}

function divFunction() {
  let a = parseInt(document.getElementById("input1").value);
  let b = parseInt(document.getElementById("input2").value);
  let answer = a/b;
  document.getElementById("symbol").innerHTML = " / ";
  document.getElementById("result").innerHTML = answer;
}