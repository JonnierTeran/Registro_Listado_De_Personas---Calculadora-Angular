/**
 * Importamos el Component para definir que es un Componente  de la app
 * y los eventos input, Output y EventEmitter para conexion al componente padre
 * y el Modelo de Persona creado anteriormente
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonaModel } from 'src/app/Models/Persona.model';

//Definimos el decorador del componente
//Definimos Etiqueta, plantilla, hojas de estilos y logica ts
@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css'],
})
//Exportamos y creamos la clase
export class ListaPersonasComponent implements OnInit {
    /**Definimos nuestros atributos */
  //Validacion para el ngIf del form de actualizacion
  Val: Boolean = false;

  /**Elementos obtenidos por medio del componente padre
   * para Listar Los datos del arreglo*/
  @Input('Elemento') Elemento: PersonaModel;
  @Input('indice') indice: number;
  
  
  /**Elementos obtenidos por medio del componente padre
   * para Seleccionar y/o Actualizar Los datos del arreglo*/
  @Input('NombreAc') NombreAc: String;
  @Input('ApellidoAc') ApellidoAc: String;

  
  /**Elementos obtenidos por medio del componente padre
   * para acceder a todos  Los datos del arreglo*/
  @Input('Arreglo') Arreglo: PersonaModel[];
  
  
  /**Elementos Enviados  por medio del componente hijo
   * para indicar los indices para seleccionar  Los datos especificos 
   *  del arreglo*/
  @Output() Indice = new EventEmitter<number>();
  @Output() IndiceElim = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  /**Metodo Eliminar, el cual recibe un indice
   * y lo asigna a la variable que sera exportada hacia el componente
   * padre para Seleccionar los elementos en el arreglo y eliminar una persona
   */
  public Eliminar(i: number): void {
    this.IndiceElim.emit(i);
  }

   /**Metodo Eliminar, el cual recibe un indice
   * y lo asigna a la variable que sera exportada hacia el componente
   * padre para Seleccionar los elementos en el arreglo mostrar datos de
   *  una persona y a su vez Poder visualizar el formulario de actualizacion
   */
  public Actualizar(i: number) {
    this.Indice.emit(i);
    this.Val = true;
  }

   /**Metodo Para cancelar una actualizacion 
    * de un elemento del arreglo
    * y a su vez Quitar de la vista el formulario de actualizacion
   */
  public CancelarActualizacion() {
    this.Val = false;
  }

   /**Metodo guardar cambios, el cual recibe un indice
   * y se usa para Seleccionar los elementos en el arreglo 
   * Remplazarlo por un nuevo arreglo actualizando asi sus datos
   * y Restableciendo los campos y cerrando el formulario
   */
  public GuardarCambios(i: number) {
    this.Arreglo[i] = new PersonaModel(this.NombreAc, this.ApellidoAc);
    this.NombreAc = '';
    this.ApellidoAc = '';
    this.Val = false;
  }
}
