import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Usuarios} from "../Models/Usuarios";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'http://localhost:5144/api/Usuarios';

  constructor(private http: HttpClient) { }

  ListarUsuarios(): Observable<Usuarios[]> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Usuarios[]>(this.apiUrl, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al obtener usuarios: ", e);
        alert("Error al obtener usuarios: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  CrearUsuario(nuevoUsuario: Usuarios): Observable<Usuarios> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Usuarios>(this.apiUrl, nuevoUsuario, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al crear usuario: ", e);
        alert("Error al crear usuario: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  ActualizarUsuario(nuevoUsuario: Usuarios, id: number): Observable<Usuarios> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Usuarios>(`${this.apiUrl}/${id}`, nuevoUsuario, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al actualizar usuario: ", e);
        alert("Error al actualizar usuario: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  BorrarUsuario(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al eliminar usuario: ", e);
        alert("Error al eliminar usuario: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }
}
