// 7.	Escribe una función que reciba una cadena de texto como parámetro y devuelva la palabra más larga encontrada en la cadena. 
let cadenaMaslarga = (palabra)=>{
    let separar = palabra.split(' ')
    let max = separar[0];
   for(let i = 0; i < separar.length; i++){
      if(max.length < separar[i].length){
        max = separar[i];
      }
   }
   return max;
}
console.log(cadenaMaslarga('hola mundo'));
console.log(cadenaMaslarga('como estan las personas'));
console.log(cadenaMaslarga('12345 123456 12345678'));
