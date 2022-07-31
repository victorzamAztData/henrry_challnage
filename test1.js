let num = [1,'henrry',2];
function soloNumero(array){
  let soloenteros =[];
  for(let i=0; i<array.length;i++ ){
    if (typeof(array[i])==='number'){
      soloenteros[i]=array[i];
      soloenteros.push(array[i]);
    }
  }
  return soloenteros;
}
console.log (soloNumero(num));
