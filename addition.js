function add() {
  var num1 = document.getElementById("firstNumber").value;
  var num2 = document.getElementById("secondNumber").value;
  var result = parseInt(num1) + parseInt(num2);
  document.getElementById("result").value = result;
}
