/**Importamos los modulos component
 * Importamos el PersonaModel para el registro de objetos de este tipo
 */
import { Component } from '@angular/core';
import { PersonaModel } from 'src/app/Models/Persona.model';

//Definimos el decorador del componente
//Definimos Etiqueta, plantilla, hojas de estilos y logica ts
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})

//Exportamos y creamos la clase 
export class PersonasComponent  {
  //Atributo del tipo Modelo de la persona
  persona: PersonaModel[];


  //Atributos Para guardar el nombre y apellido seleccionado por indices
  NombreEdit:String;
  ApellidEdit:String;

  
  /**
   * Inicializamos nuestras variables De Objetos y Normales
   */
  constructor() {
    this.persona = [
      new PersonaModel('Jonnier Andres', 'Teran Morales'),
      new PersonaModel('Sebastian Jose', 'Morelos Morales'),
      new PersonaModel('Juan Camilo', 'Rodriguez Perez'),
      new PersonaModel('Carlos Jose', 'Martinez Morales'),
    ];

    this.NombreEdit =''
    this.ApellidEdit=''
  }



  
/**Definimos nuestro metodo Agregar el cual viene del componente hijo de registro
 * Pasando por parametro un Objeto creado con la informacion de una persona
 * y agregando este objeto al arreglo de personas
 */
  public Agregar(Persona: PersonaModel): void {
    this.persona.push(Persona);
  }

  /**Definimos nuestro metodo Agregar el cual viene del componente hijo de Listado
 * Pasando por parametro un indice el cual obtentremos el objeto registrado en ese indice
 * y Eliminando este objeto del arreglo de personas
 */
  public Eliminar(i: number) {
    this.persona.splice(i, 1);
  }

   /**Definimos nuestro metodo SelecEdit el cual viene del componente hijo de Listado
 * Pasando por parametro un indice el cual obtentremos el objeto registrado en ese indice
 * y Asignando a nuestras variables este objeto del arreglo de personas
 * con su nombre y apellido respectivamente, seran enviadas de vuelta al componente hijo de listado
 */
  SelecEdit(indice:number){    
    this.NombreEdit = this.persona[indice].Nombre;
    this.ApellidEdit = this.persona[indice].Apellido;
  }
}
