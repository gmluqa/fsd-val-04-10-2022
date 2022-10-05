let operand1 = parseInt(prompt("Enter num 1"));
let sign = prompt("Enter an arithmetical sign (+,-,%,*, ^, /)");
let operand2 = parseInt(prompt("Enter num 2"));
let resultado = 0;

if (sign == "^") {
  resultado = operand1 ** operand2;
} else {
  resultado = eval(operand1 + sign + operand2);
}

console.log(resultado);
