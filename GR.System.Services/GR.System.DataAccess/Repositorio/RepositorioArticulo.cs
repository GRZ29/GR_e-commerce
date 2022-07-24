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
    public class RepositorioArticulo : Repositorio<Articulos>, IRepositorioArticulo
    {
        public RepositorioArticulo(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        readonly ApplicationDbContext _db;

        public void Actualizar(Articulos articulos)
        {
            var a = _db.Articulos.FirstOrDefault(s => s.Id == articulos.Id);

            if (a == null)
                return;

            a.NomArticulo = articulos.NomArticulo;
        }

    }
}
