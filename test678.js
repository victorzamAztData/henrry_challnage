function crearClasePersona() {
    class Persona {
      constructor(nombre, edad, hobbies, amigos) {
        this.nombre = nombre,
        this.edad = edad,
        this.hobbies = hobbies,
        this.amigos = amigos,
        this.persona = function(){
          return{
            nombre: this.nombre,
            edad: this.edad,
            hobbies: this.hobbies,
            amigos: this.amigos,
          }
        }
      }
      addFriend(nombre, edad) {
        let amigo = {nombre, edad}
        this.amigos.push(amigo);
      }
      addHobby(hobby) {
        this.hobbies.push(hobby);
      }
      getFriends() {
        const transformarObjetoAmigoANombre = ((amigo) => amigo.nombre);
        const indexed = this.amigos.map(transformarObjetoAmigoANombre);
        return indexed
      }
      getHobbies() {
        return this.hobbies
      }
      getPromedioEdad() {
        return this.amigos.map(amigo => amigo.edad).reduce((a, b) => a + b) / this.amigos.length
      }
    };
    return Persona;
  }
  
  // No modifiques nada debajo de esta linea //
  
  module.exports = crearClasePersona