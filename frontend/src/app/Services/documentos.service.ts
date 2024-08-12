import { Injectable } from '@angular/core';
import {Documentos} from "../Models/Documentos";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  private apiUrl = 'http://localhost:5144/api/Documentos';

  constructor(private http: HttpClient) { }

  ListarDocumentos(): Observable<Documentos[]> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Documentos[]>(this.apiUrl, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al obtener documentos: ", e);
        alert("Error al obtener documentos: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  CrearDocumento(nuevoDocumento: Documentos): Observable<Documentos> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Documentos>(this.apiUrl, nuevoDocumento, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al crear documento: ", e);
        alert("Error al crear documento: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  ActualizarDocumento(nuevoDocumento: Documentos, id: number): Observable<Documentos> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Documentos>(`${this.apiUrl}/${id}`, nuevoDocumento, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al actualizar documento: ", e);
        alert("Error al actualizar documento: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  BorrarDocumento(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al eliminar documento: ", e);
        alert("Error al eliminar documento: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }
}
