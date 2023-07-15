// 2.	Escribe una función que reciba un array de números ordenados de forma ascendente y devuelva el o los números faltantes en la secuencia
let numerosFaltantes = (lista)=>{
    let faltantes = [];
for(let i = 0; i <= lista.length; i++){
    let save = lista[i + 1] - lista[i];
    if (save > 1) {
        for (let j = 1; j < save; j++) {
            faltantes.push(lista[i] + j);
            }
         }

}
return faltantes
}
console.log(numerosFaltantes([1,3,5,6,8]));
