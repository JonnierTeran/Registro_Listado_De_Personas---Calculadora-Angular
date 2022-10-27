/**
 * Importamos el Component para definir que es un Componente  de la app
 * y el Modelo de Persona creado anteriormente
 */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PersonaModel } from 'src/app/Models/Persona.model';

//Definimos el decorador del componente
//Definimos Etiqueta, plantilla, hojas de estilos y logica ts
@Component({
  selector: 'app-registro-personas',
  templateUrl: './registro-personas.component.html',
  styleUrls: ['./registro-personas.component.css'],
})

//Exportamos y creamos la clase
export class RegistroPersonasComponent implements OnInit {
  /**Definimos nuestros atributos */
  NombreEdit: String;
  ApellidoEdit: String;

  /**Definimos nuestros atributos que enviaremos al componente padre
   * por medio de Output y evento emit
   */
  @Output() PersonaNueva = new EventEmitter<PersonaModel>();

  constructor() {}

  ngOnInit(): void {}

  /**Definimos nuestro metodo para agregar un registro
   */
  public Agregar(): void {
    /**Validamos que los campos de Nombres y Apellidos no esten sin datos*/
    if (this.NombreEdit.length != 0 && this.ApellidoEdit.length != 0) {
      /**Una vez Validado Creamos un Objeto de tipo PersonaModel y lo agregamos
       * a una variable local
       */
      let P = new PersonaModel(this.NombreEdit, this.ApellidoEdit);
      /**Enviamos la variable local por medio del metodo emit hacia el componente padre
       * y restablecemos los campos automaticamente
       */
      this.PersonaNueva.emit(P);
      this.NombreEdit = '';
      this.ApellidoEdit = '';
    } else if (this.NombreEdit.length == 0) {
      alert('Llenar campo de Nombres');
    } else if (this.ApellidoEdit.length == 0) {
      alert('Llenar campo de Apellidos');
    } else {
      /**Si no se cumple la condicion
       * enviar una alerta al usuario
       */
       alert('Llenar campos');
      
    }

   
    
  }

  /**Definimos nuestro metodo limpiar
   * El cual Restablece los datos de las variables
   * las cuales estan siendo seguidas por medio de
   * Two Way binding
   */
  public Limpiar(): void {
    this.NombreEdit = '';
    this.ApellidoEdit = '';
  }
}
