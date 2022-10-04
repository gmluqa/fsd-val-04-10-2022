var dia = prompt("Introduce dia de la semana").toLowerCase();

console.log(dia);

switch (dia) {
  case "lunes":
    console.log("es laboral");
    break;

  case "martes":
    console.log("es laboral");
    break;

  case "miercoles":
    console.log("es laboral");
    break;

  case "jueves":
    console.log("es laboral");
    break;

  case "viernes":
    console.log("es laboral");
    break;

  case "sabado":
    console.log("es festivo");
    break;

  case "domingo":
    console.log("es festivo");
    break;

  default:
    console.log("Teclea un dia valido");
    break;
}
