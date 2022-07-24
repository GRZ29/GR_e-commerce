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
    public class RepositorioCategoria : Repositorio<Categorias>, IRepositorioCategoria
    {
        public RepositorioCategoria(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        readonly ApplicationDbContext _db;

        public void Actualizar(Categorias categorias)
        {
            var c = _db.Categorias.FirstOrDefault(s => s.Id == categorias.Id);

            if (c == null)
                return;

            c.NomCategoria = categorias.NomCategoria;
        }

    }
}
