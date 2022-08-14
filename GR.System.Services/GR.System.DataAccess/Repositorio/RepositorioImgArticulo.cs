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
    public class RepositorioImgArticulo : Repositorio<ImgArticulos>, IRepositorioImgArticulo
    {
        public RepositorioImgArticulo(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        readonly ApplicationDbContext _db;

        public void Actualizar(ImgArticulos imgArticulos)
        {
            var i = _db.ImgArticulos.FirstOrDefault(s => s.Id == imgArticulos.Id);

            if (i == null)
            {
                return;
            }

            i.Img = imgArticulos.Img;
        }
    }
}
