// 3.	Escribe una función que reciba una cadena de texto con varias palabras separadas por espacios y devuelva la cadena de texto con las palabras ordenadas alfabéticamente. 
let ordenarCadena = (cadena) => {
    let separar = cadena.split(" ");
    let  ordenar= separar.sort();
    return ordenar.join(" ");
  }
  console.log(ordenarCadena('hola como te encuentras el dia de hoy'));
  console.log(ordenarCadena('x  z l a b r c d u e '));
  console.log(ordenarCadena('el dia martes voy a comprar un computador'));