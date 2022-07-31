function sumaTodos(array) {
    // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
    // y debe devolver la suma total entre todos los numeros dentro de ese rango
    // ej:
    // sumaTodos([1,3]) => 1 + 2 + 3 = 6
    // Nota: Los numeros estan ordenados de menor a mayor.
  
    // Tu código aca:
    let num = [1, 3]
  function sumaTodos (num) {
    let inicio = num[0];
    let fin = num[1];
    let suma = 0;
    
    for (let i = inicio; i <= fin; i++) {
      suma += i;
    }
    
    return suma;
  }
  
  console.log(sumaTodos(num));
  
    
  }