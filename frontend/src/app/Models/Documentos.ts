export class Documentos {
  id_documento: number;
  id_miembro: number;
  tipo_documento: string | null;
  documento_url: string | null;
  fecha_carga: string | null;
  estado: string | null;

  constructor() {
    this.id_documento = 0;
    this.id_miembro = 0;
    this.tipo_documento = null;
    this.documento_url = null;
    this.fecha_carga = null;
    this.estado = null;
  }
}
