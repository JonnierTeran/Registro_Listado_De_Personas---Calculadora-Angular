/**
 * Importamos el Component para definir que es un Componente  de la app
 */

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

//Definimos el decorador del componente
//Definimos Etiqueta, plantilla, hojas de estilos y logica ts
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})

//Exportamos y creamos la clase
export class HomeComponent implements OnInit {
  /**Definimos nuestros atributos */
  title: String;
  disabled: Boolean;
  cargar: String;
  Input: String;
  
  //Reference Local y ViewChild
  //Se crea El metodo recibe el elemento a seguir y le asigna una variable y su tipo de dato
  @ViewChild('E') E: ElementRef;
 I:String;

   /**
   * Inicializamos con cadenas 
   * atributos definidos a nivel global 
  */
  constructor() {
    this.title = 'SEGUNDO PROYECTO DE CONOCIMIENTOS ANGULAR V14';
    this.disabled = false;
    this.cargar = 'No Existe Ningun ELemento Cargado!!!';
    this.Input = 'Aun no se Registran caracteres';
  }

  ngOnInit() { }
    
    

  /**
   * Asignamos Una nueva cadena a la variable 
   * Cargar por medio del metodo Cargando
   */
  Cargado() {
    this.cargar = 'Elemento Cargado exitosamente';
    
    //Para acceder al <T> de viewchil se llama y se agrega .nativeElement
    this.I = this.E.nativeElement.value
 
  }

  /**
   * Asignamos Una nueva cadena a la variable 
   * Cargar por medio del metodo EventoInput
   * el cual obtiene el valor ingresado en el input
   */
  EventoInput(evento: Event) {
    this.Input = (<HTMLInputElement>evento.target).value;
  }
}



