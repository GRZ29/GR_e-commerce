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
    public class RepositorioImgCategorias : Repositorio<ImgCategorias>, IRepositorioImgCategorias
    {
        public RepositorioImgCategorias(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        readonly ApplicationDbContext _db;

        public void Actualizar(ImgCategorias imgCategorias)
        {
            var i = _db.ImgArticulos.FirstOrDefault(s => s.Id == imgCategorias.Id);

            if (i == null)
            {
                return;
            }

            i.Img = imgCategorias.Img;
        }
    }
}
