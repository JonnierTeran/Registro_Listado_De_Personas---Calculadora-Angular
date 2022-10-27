/*Creamos una clase Modelo la Cual contendra Los atributos y metodos 
para nuestra App Calculadora*/

//Definimos la clase y la exportamos
export class CalculadoraModel {
  //Definimos los atributos necesarios para la implentacion
  num1: number;
  num2: number;

  //Inicializamos los atributos por medio del Constructor
  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  //Definimos el metodo Que nos retorna la suma
  getSuma(): number {
    return this.num1 + this.num2;
  }

  //Definimos el metodo Que nos retorna la Resta
  getResta(): number {
    return this.num1 - this.num2;
  }

  //Definimos el metodo Que nos retorna la Multipl
  getMultiplicacion(): number {
    return this.num1 * this.num2;
  }

  //Definimos el metodo Que nos retorna la Division
  getDivision(): number {
    return this.num1 / this.num2;
  }
}
