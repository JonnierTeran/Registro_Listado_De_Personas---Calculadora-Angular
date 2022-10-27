/**
 * Importamos los componentes necesarios para la implementacion
 */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
/**
 * Importamos El modelo creado anteriormente para la calculadora
 */
import { CalculadoraModel } from 'src/app/Models/Calculadora.models';

/**
 * Definimos el decorador del componente
 * Definimos su selector, plantilla, hoja de Estilos y Logica ts
 */
@Component({
  selector: 'app-form-calculadora',
  templateUrl: './form-calculadora.component.html',
  styleUrls: ['./form-calculadora.component.css'],
})
/**Exportamos la logica creada y definimos la clase */
export class FormCalculadoraComponent implements OnInit {
  /**Creamos nuestros atributos de tipo CalculadoraModel */
  Calculadora: CalculadoraModel;

  /**Definimos los atributos que contendran los valores que seran enviados
   * al componente padre por medio del evento EventEmitter de Output
   */
  @Output() Res = new EventEmitter<String>();
  @Output() TOperacion = new EventEmitter<String>();

  /**Inicializamos Los atributos creados Segun la necesidad de ello*/
  constructor() {
    this.Calculadora = new CalculadoraModel(0, 0);
  }

  ngOnInit() {}

  /**Definimos nuestro metodo sumar */
  public Suma(): void {
    /**Enviamos la Cadena Suma por medio del OUTPUT hacia el componente padre*/
    this.TOperacion.emit('Suma');
    /** Accedemos al metodo del objeto declarado anteriormente
     * lo Pasamos a tipo de dato string y lo guardamos en una nueva variable
     */
    let ResSuma = '' + this.Calculadora.getSuma();
    /**Enviamos el valor obtenido de la operacion por medio
     * del OUTPUT hacia el componente padre
     */
    this.Res.emit(ResSuma);
  }

  /**Definimos nuestro metodo Restar */
  public Resta(): void {
    /**Enviamos la Cadena Resta por medio del OUTPUT hacia el componente padre*/
    this.TOperacion.emit('Resta');
    /** Accedemos al metodo del objeto declarado anteriormente
     * lo Pasamos a tipo de dato string y lo guardamos en una nueva variable
     */
    let ResResta = '' + this.Calculadora.getResta();
    /**Enviamos el valor obtenido de la operacion por medio
     * del OUTPUT hacia el componente padre
     */
    this.Res.emit(ResResta);
  }
  /**Definimos nuestro metodo Multiplicar */
  public Multiplicacion(): void {
    /**Enviamos la Cadena Multiplicacion por medio del OUTPUT hacia el componente padre*/
    this.TOperacion.emit('Multiplicacion');
    /** Accedemos al metodo del objeto declarado anteriormente
     * lo Pasamos a tipo de dato string y lo guardamos en una nueva variable
     */
    let ResMul = '' + this.Calculadora.getMultiplicacion();
    /**Enviamos el valor obtenido de la operacion por medio
     * del OUTPUT hacia el componente padre
     */
    this.Res.emit(ResMul);
  }

  /**Definimos nuestro metodo Dividir*/
  public Division(): void {
    /**Enviamos la Cadena Division por medio del OUTPUT hacia el componente padre*/
    this.TOperacion.emit('Division');
    /** Accedemos al metodo del objeto declarado anteriormente
     * lo Pasamos a tipo de dato string y lo guardamos en una nueva variable
     */
    let ResDiv = '' + this.Calculadora.getDivision();
    /**Enviamos el valor obtenido de la operacion por medio
     * del OUTPUT hacia el componente padre
     */
    this.Res.emit(ResDiv);
  }
}
