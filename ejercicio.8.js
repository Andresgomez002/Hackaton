// 8.	Escribe una función que reciba una cadena de texto como parámetro y determine si es un palíndromo. Un palíndromo es una palabra o frase que se lee igual de izquierda 
function esPalindromo(palabra){
    let separar = palabra.toLowerCase().trim().split("").reverse();
    return palabra == separar.join("") ? 'palindromo' : 'no es palindromo';
}

console.log(esPalindromo('oso'))
console.log(esPalindromo('radar'))
console.log(esPalindromo('ala1'))
console.log(esPalindromo('raadar'))