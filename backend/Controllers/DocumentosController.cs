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
    public class DocumentosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DocumentosController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Documento>>> GetDocumentos()
        {
            return await _context.Documentos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Documento>> GetDocumento(int id)
        {
            var documento = await _context.Documentos.FindAsync(id);

            if (documento == null)
            {
                return NotFound();
            }

            return documento;
        }

        [HttpPost]
        public async Task<ActionResult<Documento>> PostDocumento(Documento documento)
        {
            _context.Documentos.Add(documento);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDocumento", new { id = documento.Id }, documento);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocumento(int id, Documento documento)
        {
            if (id != documento.Id)
            {
                return BadRequest();
            }

            _context.Entry(documento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DocumentoExists(id))
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
        public async Task<IActionResult> DeleteDocumento(int id)
        {
            var documento = await _context.Documentos.FindAsync(id);
            if (documento == null)
            {
                return NotFound();
            }

            _context.Documentos.Remove(documento);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DocumentoExists(int id)
        {
            return _context.Documentos.Any(e => e.Id == id);
        }
    }
}
