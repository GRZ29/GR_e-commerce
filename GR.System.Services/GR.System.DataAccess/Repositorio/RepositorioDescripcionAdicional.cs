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
    public class RepositorioDescripcionAdicional : Repositorio<DescripcionAdicional>, IRepositorioDescripcionAdicional
    {
        public RepositorioDescripcionAdicional(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        readonly ApplicationDbContext _db;

        public void Actualizar(DescripcionAdicional descripcionAdicional)
        {
            var dA = _db.DescripcionAdicional.FirstOrDefault(s => s.Id == descripcionAdicional.Id);

            if (dA == null)
                return;

            dA.Dimensiones = descripcionAdicional.Dimensiones;
            dA.Peso = descripcionAdicional.Peso;
        }
    }
}
