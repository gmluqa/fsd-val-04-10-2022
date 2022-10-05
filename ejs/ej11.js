var dia = prompt("Introduce dia de la semana").toLowerCase();

switch (dia) {
  case "lunes":
  case "martes":
  case "miercoles":
  case "jueves":
  case "viernes":
    console.log("es laboral");
    break;

  case "sabado":
  case "domingo":
    console.log("es festivo");
    break;

  default:
    console.log("Teclea un dia valido");
    break;
}
