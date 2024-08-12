export class Usuarios {
  id_usuario: number;
  id_miembro: number | null;
  username: string | null;
  password_hash: string | null;
  rol: string | null;
  fecha_creacion: string | null;
  ultimo_acceso: string | null;

  constructor() {
    this.id_usuario = 0;
    this.id_miembro = null;
    this.username = null;
    this.password_hash = null;
    this.rol = null;
    this.fecha_creacion = null;
    this.ultimo_acceso = null;
  }
}
