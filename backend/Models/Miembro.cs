using System;
using System.Collections.Generic;

namespace ColegioProfesionalApi.Models
{
    public class Miembro
    {
        public int Id { get; set; }
        public string Dni { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string Direccion { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Universidad { get; set; }
        public string Titulo { get; set; }
        public DateTime FechaGraduacion { get; set; }
        public string FotoUrl { get; set; }
        public string Estado { get; set; }
        public DateTime FechaRegistro { get; set; }

        public ICollection<Documento> Documentos { get; set; }
        public ICollection<Pago> Pagos { get; set; }
        public ICollection<Renovacion> Renovaciones { get; set; }
        public ICollection<Usuario> Usuarios { get; set; }
    }
}
