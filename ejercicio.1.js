// 1.	Escribe una función que reciba una cadena de texto como parámetro y verifique si cumple con los siguientes criterios: debe tener al menos 8 caracteres, contener al menos una letra mayúscula, una letra minúscula y un número. 
function parametros(cadena) {
    if (cadena.length < 8) {
      return false;
    }
    if (!/[a-z]/.test(cadena)) {
        return false;
      }
    if (!/[A-Z]/.test(cadena)) {
      return false;
    }
    if (!/[0-9]/.test(cadena)) {
      return false;
    }

    return true;
  }
  

  console.log(parametros("Abcdef12")); 
  console.log(parametros("12345678")); 
  console.log(parametros("abcXYZ")); 
  console.log(parametros("XbDdef30")); 
  
  
