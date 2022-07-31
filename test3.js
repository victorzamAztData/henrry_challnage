function checkInventario(inventario, item) {
    // La funcion 'checkInventario' recibe como argumento un array de objetos llamado 'inventario' y el nombre de un item llamado 'item'
    // Cada objeto tiene una propiedad 'nombre' y 'cantidad'.
    // La funcion debe devolver la cantidad de items que hay.
    // Si el item no existe la funcion tiene que devolver 0 (cero).
    // Ej:
    // var inventario = [
    //   {
    //     nombre: 'tenedor',
    //     cantidad: 6
    //   },
    //   {
    //     nombre: 'cuchara',
    //     cantidad: 4,
    //   },
    // ]
    // checkInventario(inventario, 'tenedor') devuelve => 6
  
    // Tu código aca:
    var inventario =[{nombre:'tenedor',cantidad: 6},{nombre:'cuchara',cantidad: 4,},];
  function checkInventario(inventario, item) {
       for(i=0;i< inventario.length; i++){
        if(inventario[i].nombre === item){  
           return inventario[i].cantidad;   
       }
  }
  return 0;
  }
  console.log( checkInventario(inventario,'tenedor'))
    
    
  }
  
  // No modifiques nada debajo de esta linea //
  
  module.exports = checkInventario