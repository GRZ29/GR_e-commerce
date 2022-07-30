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
    public class RepositorioDetalle : Repositorio<Detalles>, IRepositorioDetalle
    {
        
            public RepositorioDetalle(ApplicationDbContext db) : base(db)
            {
                _db = db;
            }

            readonly ApplicationDbContext _db;

            public void Actualizar(Detalles detalles)
            {
                var c = _db.Detalles.FirstOrDefault(s => s.Id == detalles.Id);

                if (c == null)
                    return;
            }

        
    }
}
