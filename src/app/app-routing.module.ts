/*
Definimos el modulo necesario para El modulo
e importamos Los elementos necesarios para el RouterModule
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importamos los componentes a los cuales nos queremos redireccionar
import { CalculadoraComponent } from './Components/Calculadora/Calculadora.component';
import { HomeComponent } from './Components/Home/Home.component';
import { PersonasComponent } from './Components/personas/personas.component';

//Se define el Array que contiene las rutas donde path es el nombre de la ruta
const routes: Routes = [
  { path: '', component: PersonasComponent },
  { path: 'CopyText', component: HomeComponent },
  { path: 'Calculadora', component: CalculadoraComponent },
  { path: 'Personas', component: PersonasComponent },
  { path: '**', component: PersonasComponent },
];

//Configuramos el Decorador Del modulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

//Exportamos la Clase
export class AppRoutingModule {}
