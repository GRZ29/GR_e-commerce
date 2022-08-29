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
    public class RepositorioBusqueda : Repositorio<Busqueda>, IRepositorioBusqueda
    {
        public RepositorioBusqueda(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        readonly ApplicationDbContext _db;

        public void Actualizar(Busqueda busqueda)
        {
            var i = _db.Busqueda.FirstOrDefault(s => s.Id == busqueda.Id);

            if (i == null)
            {
                return;
            }

            i.Buscador= busqueda.Buscador;
        }
    }
}
