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
    public class RepositorioStock : Repositorio<Stock>, IRepositorioStock
    {
        public RepositorioStock(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        readonly ApplicationDbContext _db;

        public void Actualizar(Stock stock)
        {
            var s = _db.Stock.FirstOrDefault(s => s.Id == stock.Id);

            if (s == null)
                return;

            s.Cantidad = stock.Cantidad;
        }
    }
}
