using GR.System.DataAccess.Data;
using GR.System.DataAccess.Repositorio.IRepositorio;
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
            var result = _unidadTrabajo.ImgArticulo.Listar(propiedades: "Articulos.SubCategorias.Categorias");

            return Ok(result);

        }

        [HttpGet("{id}")]
        public IActionResult GetImgArticulosById(int id = 0)
        {
            if (id == 0)
                return new JsonResult(new { Error = "Tienes que buscar un id" });

            var result = _context.ImgArticulos.Where(x => x.IdArticulo == id);

            if (result.Count() == 0)
                return new JsonResult(new { Error = "Error vacio" }); ;

            return new JsonResult(result.Include(x => x.Articulos.SubCategorias.Categorias).Include(x => x.Articulos.Precio).Include(x => x.Articulos.Detalles.Descripcion).Include(x => x.Articulos.Detalles.DescripcionAdicional));
        }

        //[HttpGet]
        //public IActionResult GetImgCategorias(int id = 0)
        //{
        //    if (id == 0)
        //        return new JsonResult(new { Error = "Tienes que buscar un id" });

        //    var result = _context.ImgArticulos.Where(x => x.IdArticulo == id);

        //    if (result.Count() == 0)
        //        return new JsonResult(new { Error = "Error vacio" }); ;

        //    return new JsonResult(result);
        //}
    }
}
