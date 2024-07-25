using Microsoft.EntityFrameworkCore;
using ColegioProfesionalApi.Models;

namespace ColegioProfesionalApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Miembro> Miembros { get; set; }
        public DbSet<Documento> Documentos { get; set; }
        public DbSet<Pago> Pagos { get; set; }
        public DbSet<Certificacion> Certificaciones { get; set; }
        public DbSet<Renovacion> Renovaciones { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
    }
}
