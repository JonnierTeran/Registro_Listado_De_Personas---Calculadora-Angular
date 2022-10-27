/**
 * Creamo y definimos un modelo para Registrar Informacion De una persona
 */

//Definimos y Exportamos la clase Creada
export class PersonaModel {
  //Clase Molde para Persona
  //Definicion De Atributos
  public Nombre: String;
  public Apellido: String;

  //Inicializacion de atributos de la clase
  constructor(nombre: String, apellido: String) {
    this.Nombre = nombre;
    this.Apellido = apellido;
  }
}
