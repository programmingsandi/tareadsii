import {Component, OnInit} from '@angular/core';
import {Certificaciones} from "../../Models/Certificaciones";
import {CertificacionesService} from "../../Services/certificaciones.service";
import {DatePipe, NgFor, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-certificaciones',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe,FormsModule],
  templateUrl: './certificaciones.component.html',
  styleUrl: './certificaciones.component.css'
})
export class CertificacionesComponent implements OnInit{

  ListaCertificaciones: Certificaciones[] = []; // Declaración de la lista de certificaciones
  NuevaCertificacion: Certificaciones = new Certificaciones();

  constructor(private certificacionesService: CertificacionesService) { }

  ngOnInit(): void {
    this.cargarListaCertificaciones();
  }

  cargarListaCertificaciones(): void {
    this.certificacionesService.ListarCertificaciones()
      .subscribe(listaCertificaciones => {
        this.ListaCertificaciones = listaCertificaciones; // Asigna la respuesta a la lista de certificaciones
      });
  }

  crearCertificacion(): void {
    console.log(this.NuevaCertificacion);
    this.certificacionesService.CrearCertificacion(this.NuevaCertificacion).subscribe(response => {
      console.log('Certificación creada:', response);
      this.cargarListaCertificaciones();
    });
  }

  actualizarCertificacion(): void {
    console.log(this.NuevaCertificacion);
    this.certificacionesService.ActualizarCertificacion(this.NuevaCertificacion, this.NuevaCertificacion.id_certificacion).subscribe(response => {
      console.log('Certificación actualizada:', response);
      this.cargarListaCertificaciones();
    });
  }

  eliminarCertificacion(): void {
    console.log(this.NuevaCertificacion);
    this.certificacionesService.BorrarCertificacion(this.NuevaCertificacion.id_certificacion).subscribe(response => {
      console.log('Certificación eliminada:', response);
      this.cargarListaCertificaciones();
    });
  }
}
