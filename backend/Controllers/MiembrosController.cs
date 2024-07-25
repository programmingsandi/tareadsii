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
    public class MiembrosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MiembrosController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Miembro>>> GetMiembros()
        {
            return await _context.Miembros.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Miembro>> GetMiembro(int id)
        {
            var miembro = await _context.Miembros.FindAsync(id);

            if (miembro == null)
            {
                return NotFound();
            }

            return miembro;
        }

        [HttpPost]
        public async Task<ActionResult<Miembro>> PostMiembro(Miembro miembro)
        {
            _context.Miembros.Add(miembro);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMiembro", new { id = miembro.Id }, miembro);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutMiembro(int id, Miembro miembro)
        {
            if (id != miembro.Id)
            {
                return BadRequest();
            }

            _context.Entry(miembro).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MiembroExists(id))
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
        public async Task<IActionResult> DeleteMiembro(int id)
        {
            var miembro = await _context.Miembros.FindAsync(id);
            if (miembro == null)
            {
                return NotFound();
            }

            _context.Miembros.Remove(miembro);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MiembroExists(int id)
        {
            return _context.Miembros.Any(e => e.Id == id);
        }
    }
}
