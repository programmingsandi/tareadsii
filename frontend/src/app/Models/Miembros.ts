export class Miembros {
  id_miembro: number;
  dni: string | null;
  nombres: string | null;
  apellidos: string | null;
  fecha_nacimiento: string | null;
  direccion: string | null;
  email: string | null;
  telefono: string | null;
  universidad: string | null;
  titulo: string | null;
  fecha_graduacion: string | null;
  foto_url: string | null;
  estado: string | null;
  fecha_registro: string | null;

  constructor() {
    this.id_miembro = 0;
    this.dni = null;
    this.nombres = null;
    this.apellidos = null;
    this.fecha_nacimiento = null;
    this.direccion = null;
    this.email = null;
    this.telefono = null;
    this.universidad = null;
    this.titulo = null;
    this.fecha_graduacion = null;
    this.foto_url = null;
    this.estado = null;
    this.fecha_registro = null;
  }
}
