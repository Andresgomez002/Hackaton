// 6.	Escribe una función que reciba un número como parámetro y devuelva el factorial de ese número. El factorial de un número se obtiene multiplicando todos los números enteros desde 1 hasta el número dado. 
let factorial = (n)=>{
let ressultado = 1;
for(let i = 2; i <= n; i++){
    ressultado *= i;
}
return ressultado;
}
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));