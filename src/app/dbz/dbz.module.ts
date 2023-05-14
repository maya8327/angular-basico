import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbzRoutingModule } from './dbz-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './home/personajes/personajes.component';
import { AgregarPersonajesComponent } from './home/agregar-personajes/agregar-personajes.component';


@NgModule({
  declarations: [
    HomeComponent,
    PersonajesComponent,
    AgregarPersonajesComponent
  ],
  imports: [
    CommonModule,
    DbzRoutingModule,
    FormsModule
  ]
})
export class DbzModule { }
