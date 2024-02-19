//Paso 1 ingresar datos Celsius
var grados_celcius = parseInt(prompt("Ingresa los grados celcius: "));

//Paso 2 realizar transformacion

// Transformación grados kelvin
var grados_kelvin = grados_celcius + 273.15;
// Transformación fahrenheit
var grados_fahrenheit = grados_celcius * (9 / 5) + 32;

// Paso 3 mostrar resultado
alert(`Conversión a grados Kelvin: ${grados_kelvin}`);
alert(`Conversión a grados fahrenheit: ${grados_fahrenheit}`);