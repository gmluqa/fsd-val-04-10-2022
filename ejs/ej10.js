var numVetnas = prompt("Introduce el numero de ventas");
var ventasTotal = 0;
var precioVenta = 0;

for (i = 0; i < numVetnas; i++) {
  precioVenta = parseFloat(prompt("Introduce valor de venta " + (i + 1)));
  ventasTotal += precioVenta;
}

console.log(ventasTotal);
