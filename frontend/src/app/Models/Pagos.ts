export class Pagos {
  id_pago: number;
  id_miembro: number;
  monto: number;
  fecha_pago: string;
  tipo_pago: string | null;
  comprobante_url: string | null;
  estado: string | null;

  constructor() {
    this.id_pago = 0;
    this.id_miembro = 0;
    this.monto = 0.0;
    this.fecha_pago = '';
    this.tipo_pago = null;
    this.comprobante_url = null;
    this.estado = null;
  }
}
