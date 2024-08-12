import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Certificaciones} from "../Models/Certificaciones";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CertificacionesService {

  private apiUrl = 'http://localhost:5144/api/Certificaciones';

  constructor(private http: HttpClient) { }

  ListarCertificaciones(): Observable<Certificaciones[]> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Certificaciones[]>(this.apiUrl, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al obtener certificaciones: ", e);
        alert("Error al obtener certificaciones: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  CrearCertificacion(nuevaCertificacion: Certificaciones): Observable<Certificaciones> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Certificaciones>(this.apiUrl, nuevaCertificacion, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al crear certificación: ", e);
        alert("Error al crear certificación: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  ActualizarCertificacion(nuevaCertificacion: Certificaciones, id: number): Observable<Certificaciones> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Certificaciones>(`${this.apiUrl}/${id}`, nuevaCertificacion, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al actualizar certificación: ", e);
        alert("Error al actualizar certificación: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  BorrarCertificacion(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al eliminar certificación: ", e);
        alert("Error al eliminar certificación: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }
}
