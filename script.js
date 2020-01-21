let inputStr;
let btn = document.getElementById("btn");
let clear = document.getElementById("clear");
let reverseStr = document.getElementById("result");
let indexStr;

btn.addEventListener("click", resultFunc);

function resultFunc() {
  inputStr = document.getElementById("input").value;
  indexStr = inputStr.length - 1;
  for(; indexStr >= 0; indexStr--) {
    reverseStr.innerHTML += inputStr[indexStr];
  }
}

clear.addEventListener("click", clearFunc);

function clearFunc() {
  document.getElementById("input").value = "";
  document.getElementById("result").innerHTML = "";
}
