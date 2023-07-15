// 10.	Escribe una función que reciba un número entero positivo n como parámetro y devuelva un array con todos los números primos menores o iguales a n. 
let  esPrimo = (n)=> {
    let lista = [];
    if (n <= 1) {
      return false;
    }
    for(let j = 0; j < n.length; j++){
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
              lista.push;
            }
          }
    }
   
  
    return lista;
  }
console.log(esPrimo(3));