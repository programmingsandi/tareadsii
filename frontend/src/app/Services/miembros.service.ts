import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Miembros} from "../Models/Miembros";

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  constructor(private http: HttpClient) {

  }
  ListarMiembros(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(`http://localhost:5144/api/Miembros/`, {headers: headers}).pipe(
      catchError(e => {
        console.error("Error al obtener usuario: ")
        alert("Error al obtener usuario: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  CrearMiembro(nuevoMiembro:Miembros): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`http://localhost:5120/api/Miembros/`,nuevoMiembro,{headers: headers}).pipe(
      catchError(e => {
        console.error("Error al obtener usuario: ")
        alert("Error al crear miembros: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }
  ActualizarMiembro(nuevoMiembro:Miembros,id:number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(`http://localhost:5120/api/Miembros/${id}`,nuevoMiembro,{headers: headers}).pipe(
      catchError(e => {
        console.error("Error al obtener usuario: ")
        alert("Error al obtener usuario: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  BorrarMiembro(id:number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<any>(`http://localhost:5120/api/Miembros/${id}`,{headers: headers}).pipe(
      catchError(e => {
        console.error("Error al eliminar usuario")
        alert("Error al eliminar: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }
}
