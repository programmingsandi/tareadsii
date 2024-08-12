import { Injectable } from '@angular/core';
import {Renovaciones} from "../Models/Renovaciones";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RenovacionesService {

  private apiUrl = 'http://localhost:5144/api/Renovaciones'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  ListarRenovaciones(): Observable<Renovaciones[]> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Renovaciones[]>(this.apiUrl, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al obtener renovaciones: ", e);
        alert("Error al obtener renovaciones: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  CrearRenovacion(nuevaRenovacion: Renovaciones): Observable<Renovaciones> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Renovaciones>(this.apiUrl, nuevaRenovacion, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al crear renovación: ", e);
        alert("Error al crear renovación: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  ActualizarRenovacion(nuevaRenovacion: Renovaciones, id: number): Observable<Renovaciones> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Renovaciones>(`${this.apiUrl}/${id}`, nuevaRenovacion, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al actualizar renovación: ", e);
        alert("Error al actualizar renovación: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  BorrarRenovacion(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al eliminar renovación: ", e);
        alert("Error al eliminar renovación: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }
}
