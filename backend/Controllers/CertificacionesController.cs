using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ColegioProfesionalApi.Data;
using ColegioProfesionalApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ColegioProfesionalApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificacionesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CertificacionesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Certificacion>>> GetCertificaciones()
        {
            return await _context.Certificaciones.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Certificacion>> GetCertificacion(int id)
        {
            var certificacion = await _context.Certificaciones.FindAsync(id);

            if (certificacion == null)
            {
                return NotFound();
            }

            return certificacion;
        }

        [HttpPost]
        public async Task<ActionResult<Certificacion>> PostCertificacion(Certificacion certificacion)
        {
            _context.Certificaciones.Add(certificacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCertificacion", new { id = certificacion.Id }, certificacion);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCertificacion(int id, Certificacion certificacion)
        {
            if (id != certificacion.Id)
            {
                return BadRequest();
            }

            _context.Entry(certificacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CertificacionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCertificacion(int id)
        {
            var certificacion = await _context.Certificaciones.FindAsync(id);
            if (certificacion == null)
            {
                return NotFound();
            }

            _context.Certificaciones.Remove(certificacion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CertificacionExists(int id)
        {
            return _context.Certificaciones.Any(e => e.Id == id);
        }
    }
}
