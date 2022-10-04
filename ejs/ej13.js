let operand1 = parseInt(prompt("Enter num 1"));
let operand2 = parseInt(prompt("Enter num 2"));
let resultado = 0;

let sign = prompt("Enter arithmetical sign (+,-,%,*, ^, /)");

switch (sign) {
  case "+":
    resultado = operand1 + operand2;
    alert(resultado);
    break;

  case "-":
    resultado = operand1 - operand2;
    alert(resultado);
    break;

  case "*":
    resultado = operand1 * operand2;
    alert(resultado);
    break;

  case "/":
    resultado = operand1 / operand2;
    alert(resultado);

    break;

  case "^":
    resultado = operand1 ** operand2;
    alert(resultado);

    break;

  case "%":
    resultado = operand1 % operand2;
    alert(resultado);

    break;

  default:
    alert("Invalid sign");
    break;
}
