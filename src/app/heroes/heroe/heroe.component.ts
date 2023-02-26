import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent {
  nombre: string = 'Wolverine';
  edad: number = 45;

  get nombreUpperCase(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Shiryu';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }
}
