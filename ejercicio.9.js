// 9.	Escribe una función que reciba dos cadenas de texto como parámetros y determine si son anagramas. Dos palabras son anagramas si tienen las mismas letras, pero en diferente orden. 
let anagrama = (cadena1, cadena2) => {
    let palabra = cadena1.toLowerCase();
    let palabra2 = cadena2.toLowerCase();
    let orden1 = palabra.split('').sort().join('');
    let orden2 = palabra2.split('').sort().join('');
    
    return orden1 === orden2;
  }
console.log(anagrama('hola', 'aloh'));
console.log(anagrama('juan', 'aloh'));
console.log(anagrama('anan', 'nana'));