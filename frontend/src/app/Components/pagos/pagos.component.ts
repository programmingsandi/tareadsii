import {Component, OnInit} from '@angular/core';
import {Pagos} from "../../Models/Pagos";
import {PagosService} from "../../Services/pagos.service";
import {DatePipe, NgFor, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe,FormsModule],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent implements OnInit{
  ListaPagos: Pagos[] = []; // Declaración de la lista de pagos
  NuevoPago: Pagos = new Pagos();

  constructor(private pagosService: PagosService) { }

  ngOnInit(): void {
    this.cargarListaPagos();
  }

  cargarListaPagos(): void {
    this.pagosService.ListarPagos()
      .subscribe(listaPagos => {
        this.ListaPagos = listaPagos; // Asigna la respuesta a la lista de pagos
      });
  }

  crearPago(): void {
    console.log(this.NuevoPago);
    this.pagosService.CrearPago(this.NuevoPago).subscribe(response => {
      console.log('Pago creado:', response);
      this.cargarListaPagos();
    });
  }

  actualizarPago(): void {
    console.log(this.NuevoPago);
    this.pagosService.ActualizarPago(this.NuevoPago, this.NuevoPago.id_pago).subscribe(response => {
      console.log('Pago actualizado:', response);
      this.cargarListaPagos();
    });
  }

  eliminarPago(): void {
    console.log(this.NuevoPago);
    this.pagosService.BorrarPago(this.NuevoPago.id_pago).subscribe(response => {
      console.log('Pago eliminado:', response);
      this.cargarListaPagos();
    });
  }
}
