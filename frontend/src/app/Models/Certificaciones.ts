export class Certificaciones {
  id_certificacion: number;
  id_documento: number;
  tipo_certificacion: string | null;
  fecha_emision: string;
  fecha_expiracion: string | null;
  certificado_url: string | null;
  estado: string | null;

  constructor() {
    this.id_certificacion = 0;
    this.id_documento = 0;
    this.tipo_certificacion = null;
    this.fecha_emision = '';
    this.fecha_expiracion = null;
    this.certificado_url = null;
    this.estado = null;
  }
}
