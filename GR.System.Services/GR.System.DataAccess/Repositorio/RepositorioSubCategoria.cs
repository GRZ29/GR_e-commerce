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
    public class RepositorioSubCategoria: Repositorio<SubCategorias>, IRepositorioSubCategoria
    {
        public RepositorioSubCategoria(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        readonly ApplicationDbContext _db;

        public void Actualizar(SubCategorias subCategorias)
        {
            var s = _db.SubCategorias.FirstOrDefault(s => s.Id == subCategorias.Id);

            if (s == null)
                return;

            s.NomSubCategoria = subCategorias.NomSubCategoria;
        }
    }
}
