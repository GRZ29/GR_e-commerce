using GR.System.DataAccess.Data;
using GR.System.DataAccess.Repositorio.IRepositorio;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GR.System.Services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriasController : Controller
    {

        private readonly ApplicationDbContext _context;
        readonly IUnidadTrabajo _unidadTrabajo;

        public CategoriasController(ApplicationDbContext context, IUnidadTrabajo unidadTrabajo)
        {
            _context = context;
            _unidadTrabajo = unidadTrabajo;
        }
        [HttpGet]
        public IActionResult GetImgCategorias()
        {
            var result = _unidadTrabajo.ImgCategorias.Listar();

            return Ok(result);
        }

    }
}
