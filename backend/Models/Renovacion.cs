using System;

namespace ColegioProfesionalApi.Models
{
    public class Renovacion
    {
        public int Id { get; set; }
        public int MiembroId { get; set; }
        public int PagoId { get; set; }
        public int DocumentoId { get; set; }
        public DateTime FechaSolicitud { get; set; }
        public DateTime? FechaAprobacion { get; set; }
        public string Estado { get; set; }

        public Miembro Miembro { get; set; }
        public Pago Pago { get; set; }
        public Documento Documento { get; set; }
    }
}
