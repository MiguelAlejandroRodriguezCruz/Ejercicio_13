import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.scss'
})
export class InterpolacionComponent {
  mensaje: String = "hola mudo de la interpolacion o sustitucion de variables"
  nombre = "Miguel"
  edad = 21
  correo = "miguel.ale.rodri.cruz@gmail.com"
}
