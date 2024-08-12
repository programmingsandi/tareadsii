import {Component, OnInit} from '@angular/core';
import {Documentos} from "../../Models/Documentos";
import {DocumentosService} from "../../Services/documentos.service";
import {DatePipe, NgFor, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe,FormsModule],
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.css'
})
export class DocumentosComponent implements OnInit{
  ListaDocumentos: Documentos[] = []; // Declaración de la lista de documentos
  NuevoDocumento: Documentos = new Documentos();

  constructor(private documentosService: DocumentosService) { }

  ngOnInit(): void {
    this.cargarListaDocumentos();
  }

  cargarListaDocumentos(): void {
    this.documentosService.ListarDocumentos()
      .subscribe(listaDocumentos => {
        this.ListaDocumentos = listaDocumentos; // Asigna la respuesta a la lista de documentos
      });
  }

  crearDocumento(): void {
    console.log(this.NuevoDocumento);
    this.documentosService.CrearDocumento(this.NuevoDocumento).subscribe(response => {
      console.log('Documento creado:', response);
      this.cargarListaDocumentos();
    });
  }

  actualizarDocumento(): void {
    console.log(this.NuevoDocumento);
    this.documentosService.ActualizarDocumento(this.NuevoDocumento, this.NuevoDocumento.id_documento).subscribe(response => {
      console.log('Documento actualizado:', response);
      this.cargarListaDocumentos();
    });
  }

  eliminarDocumento(): void {
    console.log(this.NuevoDocumento);
    this.documentosService.BorrarDocumento(this.NuevoDocumento.id_documento).subscribe(response => {
      console.log('Documento eliminado:', response);
      this.cargarListaDocumentos();
    });
  }
}
