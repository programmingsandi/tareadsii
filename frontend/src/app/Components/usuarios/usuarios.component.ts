import {Component, OnInit} from '@angular/core';
import {Usuarios} from "../../Models/Usuarios";
import {UsuariosService} from "../../Services/usuarios.service";
import {DatePipe, NgFor, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe,FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit{
  ListaUsuarios: Usuarios[] = []; // Declaración de la lista de usuarios
  NuevoUsuario: Usuarios = new Usuarios();

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarListaUsuarios();
  }

  cargarListaUsuarios(): void {
    this.usuariosService.ListarUsuarios()
      .subscribe(listaUsuarios => {
        this.ListaUsuarios = listaUsuarios; // Asigna la respuesta a la lista de usuarios
      });
  }

  crearUsuario(): void {
    // Aquí puedes agregar la lógica para crear un nuevo usuario
    console.log(this.NuevoUsuario);
    // Por ejemplo, podrías llamar a un método del servicio para guardar el nuevo usuario en la base de datos
    this.usuariosService.CrearUsuario(this.NuevoUsuario).subscribe(response => {
      // Manejar la respuesta después de crear el usuario
      console.log('Usuario creado:', response);
      // Opcionalmente, puedes recargar la lista de usuarios
      this.cargarListaUsuarios();
    });
  }

  actualizarUsuario(): void {
    // Aquí puedes agregar la lógica para actualizar un usuario
    console.log(this.NuevoUsuario);
    // Por ejemplo, podrías llamar a un método del servicio para actualizar el usuario en la base de datos
    this.usuariosService.ActualizarUsuario(this.NuevoUsuario, this.NuevoUsuario.id_usuario).subscribe(response => {
      // Manejar la respuesta después de actualizar el usuario
      console.log('Usuario actualizado:', response);
      // Opcionalmente, puedes recargar la lista de usuarios
      this.cargarListaUsuarios();
    });
  }

  eliminarUsuario(): void {
    // Aquí puedes agregar la lógica para eliminar un usuario
    console.log(this.NuevoUsuario);
    // Por ejemplo, podrías llamar a un método del servicio para eliminar el usuario en la base de datos
    this.usuariosService.BorrarUsuario(this.NuevoUsuario.id_usuario).subscribe(response => {
      // Manejar la respuesta después de eliminar el usuario
      console.log('Usuario eliminado:', response);
      // Opcionalmente, puedes recargar la lista de usuarios
      this.cargarListaUsuarios();
    });
  }
}
