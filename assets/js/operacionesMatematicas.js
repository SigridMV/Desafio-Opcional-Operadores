// Pedir al usuario que ingrese dos números diferentes y mayores a cero. 
var numero_1 = parseInt(prompt("Ingrese un número mayor a cero"));
var numero_2 = parseInt(prompt("Ingrese otro número mayor a cero y diferente al anterior"));

//Calcular lo siguiente -suma -resta -division -multiplicacion -modulo
var suma = numero_1 + numero_2;
var resta = numero_1 - numero_2;
var division = numero_1 / numero_2;
var multiplicacion = numero_1 * numero_2;
var modulo = numero_1 % numero_2;


//Mostrar resultados
alert(`Resultado suma: ${suma}`);
alert(`Resultado resta: ${resta}`);
alert(`Resultado division: ${division}`);
alert(`Resultado multiplicacion: ${multiplicacion}`);
alert(`Resultado modulo: ${modulo}`);



