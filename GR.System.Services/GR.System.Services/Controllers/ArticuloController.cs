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
            //get information by entity framework
            //var result = _context.Articulos.Include(x => x.Categorias)
            //                               .Include(x => x.Precio)
            //                               .Include(x => x.Detalles.Descripcion)
            //                               .Include(x => x.Detalles.DescripcionAdicional);
            //                               .Where(c => c.Categorias.NomCategoria == "ESCRITORIO")
                        
            //get information by repository
            var result = _unidadTrabajo.Articulo.Listar(propiedades: "Categorias,Precio,Detalles.Descripcion,Detalles.DescripcionAdicional,ImgPreviewArticulos");

            return new JsonResult(new { success = true, data = result });

        }
    }
}
