import {Component, OnInit} from '@angular/core';
import {Miembros} from "../../Models/Miembros";
import {MiembrosService} from "../../Services/miembros.service";
import {DatePipe, NgFor, NgIf} from "@angular/common";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-miembros-component',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe,FormsModule],
  templateUrl: './miembros.component.html',
  styleUrl: './miembros.component.css'
})
export class MiembrosComponent implements OnInit{
  ListaMiembros: Miembros[] = []; // Declaración de la lista de miembros
  NuevoMiembro:Miembros=new Miembros();

  constructor(private miembrosService: MiembrosService)
              { }

  ngOnInit(): void {
    this.cargarListaMiembros();
  }

  cargarListaMiembros(): void {
    this.miembrosService.ListarMiembros()
      .subscribe(listaMiembros => {
        this.ListaMiembros = listaMiembros; // Asigna la respuesta a la lista de proyectos
      });
  }

  crearMiembro(): void {
    // Aquí puedes agregar la lógica para crear un nuevo miembro
    console.log(this.NuevoMiembro);
    // Por ejemplo, podrías llamar a un método del servicio para guardar el nuevo miembro en la base de datos
    this.miembrosService.CrearMiembro(this.NuevoMiembro).subscribe(response => {
      // Manejar la respuesta después de crear el miembro
      console.log('Miembro creado:', response);
      // Opcionalmente, puedes recargar la lista de miembros
      this.cargarListaMiembros();
    });
  }
  actualizarMiembro(): void {
    // Aquí puedes agregar la lógica para crear un nuevo miembro
    console.log(this.NuevoMiembro);
    // Por ejemplo, podrías llamar a un método del servicio para guardar el nuevo miembro en la base de datos
    this.miembrosService.ActualizarMiembro(this.NuevoMiembro,this.NuevoMiembro.id_miembro).subscribe(response => {
      // Manejar la respuesta después de crear el miembro
      console.log('Miembro creado:', response);
      // Opcionalmente, puedes recargar la lista de miembros
      this.cargarListaMiembros();
    });
  }
   eliminarMiembro(): void {
    // Aquí puedes agregar la lógica para crear un nuevo miembro
    console.log(this.NuevoMiembro);
    // Por ejemplo, podrías llamar a un método del servicio para guardar el nuevo miembro en la base de datos
    this.miembrosService.BorrarMiembro(this.NuevoMiembro.id_miembro).subscribe(response => {
      // Manejar la respuesta después de crear el miembro
      console.log('Miembro Eliminado:', response);
      // Opcionalmente, puedes recargar la lista de miembros
      this.cargarListaMiembros();
    });
  }
}
