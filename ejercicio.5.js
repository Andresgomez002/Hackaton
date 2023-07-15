
// 5.	Escribe una función que reciba un número como parámetro y determine si es un número primo. Devuelve true si es primo y false si no lo es. 

let  esPrimo = (n)=> {
    if (n <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }

console.log(esPrimo(1));
console.log(esPrimo(2));
console.log(esPrimo(3));
console.log(esPrimo(4));
console.log(esPrimo(5));
console.log(esPrimo(6));
console.log(esPrimo(7));
console.log(esPrimo(11));