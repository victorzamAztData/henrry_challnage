function cuantosRepetidos(array, elemento) {
    // La funcion llamada 'cuantosRepetidos' recibe como argumento un array de arrays llamado 'array' y un string llamado 'elemento'
    // Cada subarray contiene strings.
    // Debe devolver la cantidad de veces que 'elemento' se repite dentro de los subarrays.
    // Ej:
    // cuantosRepetidos([['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana') debe retornar 2
    // ya que 'manzana' se repite 2 veces.
    // Nota: Podes usar for loops anidados.
  
    // Tu código aca:
  
    let arre = [['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']];
  function cuantosRepetidos(array, elemento) {
      let conteo = 0;
      for ( i = 0; i < array.length; i++) {
          for(item of array[i]){
              if(item === elemento){
                  conteo++;
              }
          }
      }
      return conteo;
  }
  console.log(cuantosRepetidos(arre, 'manzana'));
    
    
  }
  
  // No modifiques nada debajo de esta linea //
  
  module.exports = cuantosRepetidos