// Paso 1 solicitar datos la usuario
var total_dias = parseInt(prompt("Ingresa la cantidad de días:"));

// Paso 2 realizar operación
var anios = Math.floor(total_dias / 365);
var dias_restantes = total_dias % 365;

var semanas = Math.floor(dias_restantes / 7);
var dias = dias_restantes % 7;

// Paso 3 mostrar resultado
alert(
  `Durante los ${total_dias} días que estuviste estudiando pasaron ${anios} años, ${semanas} semanas y ${dias} días. Bien hecho!`
);