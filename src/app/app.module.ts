/*Importamos los modulos necesarios
Para Definir el modulo de la Aplicacion*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*Importamos el modulo de Formularios para Two Way Binding*/
import { FormsModule } from '@angular/forms';

//Importamos la Configuaracion de nuestro Router (http)
import { AppRoutingModule } from './app-routing.module';

//Importamos Nuestros Componentes para que puedan ser leidos por Angular
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './Components/Calculadora/Calculadora.component';
import { HomeComponent } from './Components/Home/Home.component';
import { PersonasComponent } from './Components/personas/personas.component';
import { ListaPersonasComponent } from './Components/lista-personas/lista-personas.component';
import { FormCalculadoraComponent } from './Components/form-calculadora/form-calculadora.component';
import { ResultCalculadoraComponent } from './Components/result-calculadora/result-calculadora.component';
import { RegistroPersonasComponent } from './Components/registro-personas/registro-personas.component';

/*En Nuestro Decorador del Modulo Definimos 
Los Componentes,Modulos, Servicios e Indicamos Quien se ejecuta primero */

@NgModule({
  //Declaramos los componentes
  declarations: [
    AppComponent,
    CalculadoraComponent,
    HomeComponent,
    PersonasComponent,
    ListaPersonasComponent,
    FormCalculadoraComponent,
    ResultCalculadoraComponent,
    RegistroPersonasComponent,
  ],
  //Declaramos los Modulos Necesarios
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  //Declaramos los Servicios Necesarios
  providers: [],
  //Declaramos el componente Principal
  bootstrap: [AppComponent],
})
//Exportamos las configuraciones
export class AppModule {}
