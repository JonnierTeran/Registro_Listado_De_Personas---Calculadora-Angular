//Importamos el modulo para definir un componente
import { Component } from '@angular/core';

//Definimos el Decorador del componente
//Especificamos su Etiqueta, su  Plantilla, hoja de Estilos Y Clase a Implementar
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//Exportamos la Logica aplicada en esta clase
export class AppComponent {}
