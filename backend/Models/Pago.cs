using System;

namespace ColegioProfesionalApi.Models
{
    public class Pago
    {
        public int Id { get; set; }
        public int MiembroId { get; set; }
        public decimal Monto { get; set; }
        public DateTime FechaPago { get; set; }
        public string TipoPago { get; set; }
        public string ComprobanteUrl { get; set; }
        public string Estado { get; set; }

        public Miembro Miembro { get; set; }
    }
}
