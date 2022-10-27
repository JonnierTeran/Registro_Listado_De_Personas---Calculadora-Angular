/**
 * Importamos el Component para definir que es un Componente  de la app
 */

import { Component} from '@angular/core';

//Definimos el decorador del componente
//Definimos Etiqueta, plantilla, hojas de estilos y logica ts
@Component({
  selector: 'app-Calculadora',
  templateUrl: './Calculadora.component.html',
  styleUrls: ['./Calculadora.component.css'],
})

//Exportamos y creamos la clase 
export class CalculadoraComponent  {
  
  /**Definimos nuestros atributos */
  Resultado:String;
  Operacion:String;
 
  /**
   * Inicializamos con cadenas vacidas los
   * atributos definidos a nivel global 
  */
  constructor(){
  this.Resultado =''
  this.Operacion=''
  }

  /**Definimos el metodo Que recibe la informacion 
   * con el resultado de las operacion por medio de el event Binding (OUTPUT)
   * del componente form-caluladora
   * Le asignamos a nuestra variable Resultado el valor obtenido
   * mediante el Parametro emitido => $event
   */
  public ResOperacion(Val:any){
    this.Resultado = ""+": "+Val
  }
  
  /**Definimos el metodo Que recibe la informacion 
   * con el tipo de operacion seleccionada por medio del event Binding (OUTPUT)
   * del componente form-caluladora
   * Le asignamos a nuestra variable Resultado el valor obtenido
   * mediante el Parametro emitido => $event
   */
  public TipoO(Res:any){
    this.Operacion = ""+Res;
  }
}
