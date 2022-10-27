/**
 * Importamos los componentes necesarios para la implementacion
 */
import { Component, Input, OnInit } from '@angular/core';

/**
 * Definimos el decorador del componente
 * Definimos su selector, plantilla, hoja de Estilos y Logica ts
 */
@Component({
  selector: 'app-result-calculadora',
  templateUrl: './result-calculadora.component.html',
  styleUrls: ['./result-calculadora.component.css'],
})

/**Exportamos la logica creada y definimos la clase */
export class ResultCalculadoraComponent implements OnInit {

  /**
   * Recolectamos la Informacion enviada desde el componente 
   * padre Calculadora.component por medio de Property Binding
   * y la recolectamos con el decorador Input()
   */
  @Input('Resultado') Resultado: any;
  @Input('Operacion') Operacion: String;

  constructor() {}

  ngOnInit(): void {}
}
