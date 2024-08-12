export class Renovaciones {
  id_renovacion: number;
  id_miembro: number;
  id_pago: number;
  id_documento: number;
  fecha_solicitud: string;
  fecha_aprobacion: string | null;
  estado: string | null;

  constructor() {
    this.id_renovacion = 0;
    this.id_miembro = 0;
    this.id_pago = 0;
    this.id_documento = 0;
    this.fecha_solicitud = '';
    this.fecha_aprobacion = null;
    this.estado = null;
  }
}
