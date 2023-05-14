import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/interfaces';

@Component({
  selector: 'app-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
  styleUrls: ['./agregar-personajes.component.scss']
})
export class AgregarPersonajesComponent {

  @Output() nuevoEmitter = new EventEmitter<Personaje>();

  nuevo: Personaje = {
    nombre : '',
    poder: 0
  }

  agregarPersonaje() {
    if (this.nuevo.nombre.trim() === '' || this.nuevo.poder === 0) return;
    //this.personajes.push(this.nuevo);
    this.nuevoEmitter.emit(this.nuevo);
    this.nuevo = {
      nombre : '',
      poder: 0
    }
  }

}
