using GR.System.DataAccess.Data;
using GR.System.DataAccess.Repositorio.IRepositorio;
using GR.System.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.DataAccess.Repositorio
{
    public class RepositorioDescripcion : Repositorio<Descripcion>, IRepositorioDescripcion
    {
        public RepositorioDescripcion(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        readonly ApplicationDbContext _db;

        public void Actualizar(Descripcion descripcion)
        {
            var d = _db.Descripcion.FirstOrDefault(s => s.Id == descripcion.Id);

            if (d == null)
                return;

            d.Alto = descripcion.Alto;
            d.Ancho = descripcion.Ancho;
            d.Fondo = descripcion.Fondo;
        }
    }
}
