var meses = 10;
function estaciones(meses) {
  if (meses > 0 && meses <= 2) {
    document.write("Invierno");
  } else if (meses >= 3 && meses <= 5) {
    document.write("Primavera");
  } else if (meses >= 6 && meses <= 8) {
    document.write("Verano");
  } else if (meses >= 9 && meses <= 11) {
    document.write("Otoño");
  } else if (meses > 11 && meses < 13) {
    document.write("Invierno");
  } else if (meses > 12) {
    document.write("Fuera del Rango");
    alert("Valor de mes incorecto");
  }
}

estaciones(meses);
document.write("<br>");
document.write("<br>20004126");
document.write("<br>Ivan Anibal Balan Paniagua");
alert("Gracias");
