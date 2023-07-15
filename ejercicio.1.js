// 1.	Escribe una función que reciba una cadena de texto como parámetro y verifique si cumple con los siguientes criterios: debe tener al menos 8 caracteres, contener al menos una letra mayúscula, una letra minúscula y un número. 
function cumpleParametros(cadena) {
    if (cadena.length < 8) {
      return false;
    }
  
    let mayuscula = false;
    let minuscula = false;
    let numero = false;
  
    for (let i = 0; i < cadena.length; i++) {
      const save = cadena.charAt(i);
  
      if (save >= 'A' && save <= 'Z') {
        mayuscula = true;
      } else if (save >= 'a' && save <= 'z') {
        minuscula = true;
      } else if (save >= '0' && save <= '9') {
        numero = true;
      }
    }
  
    return mayuscula && minuscula && numero;
  }
  
  // Ejemplo de uso
  console.log(cumpleParametros("fchTuhA2")); 
  console.log(cumpleParametros("12345")); 
  console.log(cumpleParametros("ulop")); 

  
  
  
