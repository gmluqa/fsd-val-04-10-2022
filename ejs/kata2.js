let num1 = parseInt(prompt("Introduce num 1"));
let num2 = parseInt(prompt("Introduce num 2"));

function Elevar(param1, param2) {
  let resultado = param1 ** param2;
  return resultado;
}

let resultadoDeFuncion = Elevar(num1, num2);
console.log(resultadoDeFuncion);
