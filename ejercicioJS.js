/**
 * Función que encripta o desencripta un mensaje con una llave dada.
 */
function secret(message, type_function, key) {
  if (type_function === "encrypt") {
    for (let i = 0; i < message.length; i++) {
      message[i] = message[i] + key;
    }
  } else if (type_function === "decrypt") {
    for (let i = 0; i < message.length; i++) {
      message[i] = message[i] - key;
    }
  }
  return message;
}

/**
 * Función que calcula el MCD entre 2 números
 * a : Número 1
 * b : Número 2
 */
var mcd = (a, b) => { return a === b ? a : a > b ? mcd(a - b, b) : mcd(a, b - a); };
