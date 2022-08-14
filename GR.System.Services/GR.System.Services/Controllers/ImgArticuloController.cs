using GR.System.DataAccess.Data;
using GR.System.DataAccess.Repositorio.IRepositorio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GR.System.Services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImgArticuloController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        readonly IUnidadTrabajo _unidadTrabajo;

        public ImgArticuloController(ApplicationDbContext context, IUnidadTrabajo unidadTrabajo)
        {
            _context = context;
            _unidadTrabajo = unidadTrabajo;
        }

        [HttpGet]
        public IActionResult GetImgArticulos()
        {
            var result = _unidadTrabajo.ImgArticulo.Listar(propiedades: "Articulos");

            return Ok(result);

        }
    }
}
