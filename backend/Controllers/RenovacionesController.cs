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
    public class RenovacionesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RenovacionesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Renovacion>>> GetRenovaciones()
        {
            return await _context.Renovaciones.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Renovacion>> GetRenovacion(int id)
        {
            var renovacion = await _context.Renovaciones.FindAsync(id);

            if (renovacion == null)
            {
                return NotFound();
            }

            return renovacion;
        }

        [HttpPost]
        public async Task<ActionResult<Renovacion>> PostRenovacion(Renovacion renovacion)
        {
            _context.Renovaciones.Add(renovacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRenovacion", new { id = renovacion.Id }, renovacion);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRenovacion(int id, Renovacion renovacion)
        {
            if (id != renovacion.Id)
            {
                return BadRequest();
            }

            _context.Entry(renovacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RenovacionExists(id))
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
        public async Task<IActionResult> DeleteRenovacion(int id)
        {
            var renovacion = await _context.Renovaciones.FindAsync(id);
            if (renovacion == null)
            {
                return NotFound();
            }

            _context.Renovaciones.Remove(renovacion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RenovacionExists(int id)
        {
            return _context.Renovaciones.Any(e => e.Id == id);
        }
    }
}
