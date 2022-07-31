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
    //public class ArticuloController : ControllerBase
    //{
    //    public ArticuloController(IUnidadTrabajo controlador)
    //    {
    //        _controlador = controlador;
    //    }

    //    readonly IUnidadTrabajo _controlador;


    //    [HttpGet]
    //    public IActionResult GetArticulos()
    //    {
    //        var articulos = _controlador.Articulo.Listar(propiedades: "Categorias,Precio,Detalles", propiedadesDentro: "DescripcionAdicional,Descripcion");

    //        //var detalles = _controlador.

    //        return new JsonResult(new { success = true, data = articulos });
    //    }

    //    //    [HttpGet]
    //    //    public IEnumerable<Articulos> GetArticulos2()
    //    //    {
    //    //        return _controlador.Articulo.Listar(propiedades: "Categorias,Precio,Detalles", propiedadesDentro: "DescripcionAdicional,Descripcion");
    //    //    }
    //}
    public class ArticuloController : ControllerBase
    {

        private readonly ApplicationDbContext _context;
        readonly IUnidadTrabajo _unidadTrabajo;

        public ArticuloController(ApplicationDbContext context, IUnidadTrabajo unidadTrabajo)
        {
            _context = context;
            _unidadTrabajo = unidadTrabajo;
        }

        [HttpGet]
        public IActionResult GetArticulos()
        {
            var result = _context.Articulos.Include(x => x.Categorias)
                                           .Include(x => x.Precio)
                                           .Include(x => x.Detalles.Descripcion)
                                           .Include(x => x.Detalles.DescripcionAdicional);


            return new JsonResult(new { success = true, data = result });

        }
    }
}
