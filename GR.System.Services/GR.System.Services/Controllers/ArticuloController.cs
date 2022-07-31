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
            return new JsonResult(new
            {
                success = true,
                data = _context.Articulos
                    .FromSqlRaw("EXECUTE usp_ListarArticulos").ToList()
            });

            //var fitlter = "ESCRITORIOS";

            //var blogs = _context.Articulos
            //.FromSqlInterpolated($"EXECUTE usp_GetAllTodoItemsByStatus {fitlter}")
            //.ToList();

            //return blogs;

            //var query = from a in _context.Articulos
            //            join c in _context.Categorias on a.IdCategoria equals c.Id
            //            join p in _context.Precio on a.IdPrecio equals p.Id
            //            join d in _context.Detalles on a.IdDetalle equals d.Id
            //            join des in _context.Descripcion on d.IdDesc equals des.Id
            //            join desAd in _context.DescripcionAdicional on d.IdDesAdicional equals desAd.Id
            //            select new Articulos
            //            {
            //                Id = a.Id,
            //                IdCategoria = c.Id,
            //                IdPrecio = p.Id,
            //                IdDetalle = p.Id,
            //                NomArticulo = a.NomArticulo,
            //                Categorias = c,
            //                Precio = p,
            //                Detalles = new Detalles
            //                {
            //                    Id = d.Id,
            //                    IdDesAdicional = d.IdDesAdicional,
            //                    IdDesc = d.IdDesc,
            //                    Descripcion = des,
            //                    DescripcionAdicional = desAd
            //                }
            //            };

            //return query;
        }

        //[HttpGet]
        //public IActionResult GetArticulos()
        //{

        //    return new JsonResult(new { success = true, data = _unidadTrabajo.Articulo.Listar() });
        //}
    }
}
