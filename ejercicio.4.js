// Escribe una función que reciba una cadena de texto como parámetro y devuelva la cantidad de vocales que contiene. 
 

let contarVocales = (palabra)=>{
    let contador = 0;
       for (let i = 0; i <= palabra.length; i++) {
         if (
           palabra.charAt(i) == "a" ||
           palabra.charAt(i) == "e" ||
           palabra.charAt(i) == "i" ||
           palabra.charAt(i) == "o" ||
           palabra.charAt(i) == "u"
         ) {
           contador++;
         }
       }
       return contador;
  }
  console.log(contarVocales("yeison arley"));
  console.log(contarVocales("aeiou"));
  console.log(contarVocales("andres nicolas gomez lopez"));
  