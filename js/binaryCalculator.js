let res = document.getElementById("res");
let operand1 = "";
let operator = "";
let operand2 = "";

function handleRes() {
  res.innerHTML = `${operand1}${operator}${operand2}`;
}

function append(val) {
  if (operator) {
    operand2 += val;
  } else {
    operand1 += val;
  }
  handleRes();
}

function clearRes() {
  operand1 = "";
  operand2 = "";
  operator = "";
  handleRes();
}

function equals() {
  switch (operator) {
    case "+":
      let sumValue = parseInt(operand1, 2) + parseInt(operand2, 2);
      res.innerHTML = sumValue.toString(2);
			operand1 = sumValue.toString(2)
			operator = ""
			operand2 = ""
      break;
    case "-":
      let subValue = parseInt(operand1, 2) - parseInt(operand2, 2);
      res.innerHTML = subValue.toString(2);
			operand1 = subValue.toString(2)
			operator = ""
			operand2 = ""
      break;
    case "*":
      let mulValue = parseInt(operand1, 2) * parseInt(operand2, 2);
      res.innerHTML = mulValue.toString(2);
			operand1 = mulValue.toString(2)
			operator = ""
			operand2 = ""
      break;
    case "/":
      let divValue = parseInt(operand1, 2) / parseInt(operand2, 2);
      res.innerHTML = divValue.toString(2);
			operand1 = divValue.toString(2)
			operator = ""
			operand2 = ""
      break;
    default:
      break;
  }
}

function handleOperator(val) {
  if (!operator) {
    operator = val;
  }
  handleRes();
}
