using GR.System.DataAccess.Data;
using GR.System.DataAccess.Repositorio.IRepositorio;
using GR.System.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GR.System.Services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColorController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        readonly IUnidadTrabajo _unidadTrabajo;

        public ColorController(ApplicationDbContext context, IUnidadTrabajo unidadTrabajo)
        {
            _context = context;
            _unidadTrabajo = unidadTrabajo;
        }

        [HttpGet("{id}")]
        public IActionResult GetColorsById(int id = 0)
        {
            if (id == 0)
                return new JsonResult(new { Error = "Tienes que buscar un id" });

            var result = _context.TipColores.Where(x => x.IdArticulo == id);

            if (result.Count() == 0)
                return new JsonResult(new { Error = "Error vacio" }); ;

            return Ok(result.Include(x => x.Colores).Include(x => x.Articulos.Detalles).Include(x => x.Articulos.Precio).Include(x => x.Articulos.Precio).Include(x => x.Articulos.ImgPreviewArticulos));
        }
    }
}
