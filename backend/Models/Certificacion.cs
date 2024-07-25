
using System;

namespace ColegioProfesionalApi.Models
{
    public class Certificacion
    {
        public int Id { get; set; }
        public int DocumentoId { get; set; }
        public string TipoCertificacion { get; set; }
        public DateTime FechaEmision { get; set; }
        public DateTime? FechaExpiracion { get; set; }
        public string CertificadoUrl { get; set; }
        public string Estado { get; set; }

        public Documento Documento { get; set; }
    }
}
