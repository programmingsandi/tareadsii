import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Pagos} from "../Models/Pagos";

@Injectable({
  providedIn: 'root'
})
export class PagosService {


  private apiUrl = 'http://localhost:5144/api/Pagos';

  constructor(private http: HttpClient) { }

  ListarPagos(): Observable<Pagos[]> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Pagos[]>(this.apiUrl, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al obtener pagos: ", e);
        alert("Error al obtener pagos: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  CrearPago(nuevoPago: Pagos): Observable<Pagos> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Pagos>(this.apiUrl, nuevoPago, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al crear pago: ", e);
        alert("Error al crear pago: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  ActualizarPago(nuevoPago: Pagos, id: number): Observable<Pagos> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Pagos>(`${this.apiUrl}/${id}`, nuevoPago, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al actualizar pago: ", e);
        alert("Error al actualizar pago: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }

  BorrarPago(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: headers }).pipe(
      catchError(e => {
        console.error("Error al eliminar pago: ", e);
        alert("Error al eliminar pago: " + e.error.mensaje);
        return throwError(e);
      })
    );
  }
}
