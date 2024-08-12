import { Component } from '@angular/core';
import {DatePipe, NgFor, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Renovaciones} from "../../Models/Renovaciones";
import {RenovacionesService} from "../../Services/renovaciones.service";

@Component({
  selector: 'app-renovaciones',
  standalone: true,
  imports:  [NgIf, NgFor, DatePipe,FormsModule],
  templateUrl: './renovaciones.component.html',
  styleUrl: './renovaciones.component.css'
})
export class RenovacionesComponent {
  ListaRenovaciones: Renovaciones[] = []; // Declaración de la lista de renovaciones
  NuevaRenovacion: Renovaciones = new Renovaciones();

  constructor(private renovacionesService: RenovacionesService) { }

  ngOnInit(): void {
    this.cargarListaRenovaciones();
  }

  cargarListaRenovaciones(): void {
    this.renovacionesService.ListarRenovaciones()
      .subscribe(listaRenovaciones => {
        this.ListaRenovaciones = listaRenovaciones; // Asigna la respuesta a la lista de renovaciones
      });
  }

  crearRenovacion(): void {
    console.log(this.NuevaRenovacion);
    this.renovacionesService.CrearRenovacion(this.NuevaRenovacion).subscribe(response => {
      console.log('Renovación creada:', response);
      this.cargarListaRenovaciones();
    });
  }

  actualizarRenovacion(): void {
    console.log(this.NuevaRenovacion);
    this.renovacionesService.ActualizarRenovacion(this.NuevaRenovacion, this.NuevaRenovacion.id_renovacion).subscribe(response => {
      console.log('Renovación actualizada:', response);
      this.cargarListaRenovaciones();
    });
  }

  eliminarRenovacion(): void {
    console.log(this.NuevaRenovacion);
    this.renovacionesService.BorrarRenovacion(this.NuevaRenovacion.id_renovacion).subscribe(response => {
      console.log('Renovación eliminada:', response);
      this.cargarListaRenovaciones();
    });
  }
}
