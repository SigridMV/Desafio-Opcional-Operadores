// Paso 1 solicitar datos la usuario
var numero_1 = parseInt(prompt("Ingresa el primer número 🤓: "));
var numero_2 = parseInt(prompt("Ingresa el segundo número  🤓: "));
var numero_3 = parseInt(prompt("Ingresa el tercer número  🤓: "));
var numero_4 = parseInt(prompt("Ingresa el cuarto número  🤓: "));
var numero_5 = parseInt(prompt("Ingresa el quinto número  🤓: "));

// Paso 2 realizar operación
var suma = numero_1 + numero_2 + numero_3 + numero_4 + numero_5;
var promedio = suma / 5;

// Paso 3 mostrar resultado
alert(
  `la suma de los números es ${suma} y su promedio es ${promedio}`
);