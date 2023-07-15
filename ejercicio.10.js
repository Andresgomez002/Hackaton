// 10.	Escribe una función que reciba un número entero positivo n como parámetro y devuelva un array con todos los números primos menores o iguales a n. 
  
  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let j = 2; j <= Math.sqrt(numero); j++) {
      if (numero % j === 0) {
        return false;
      }
    }
  
    return true;
  }
  let  iterar = (n) => {
    let primos = [];
  
    for (let i = 0; i <= n; i++) {
      if (esPrimo(i)) {
        primos.push(i);
      }
    }
  
    return primos;
  }
  
console.log(iterar(5));
console.log(iterar(10));
console.log(iterar(15));