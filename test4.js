function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:
  const num1 = 11711;
  const num2 = 12345;
  
  function numeroSimetrico(num) {
    return ""+num === (""+num).split("").reverse().join("")
  }
  
  console.log(numeroSimetrico(num1))
  console.log(numeroSimetrico(num2))
  }
  
  // No modifiques nada debajo de esta linea //
  
  module.exports = numeroSimetrico