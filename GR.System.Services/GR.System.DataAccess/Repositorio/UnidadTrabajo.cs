using GR.System.DataAccess.Data;
using GR.System.DataAccess.Repositorio.IRepositorio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.DataAccess.Repositorio
{
    public class UnidadTrabajo : IUnidadTrabajo
    {
        public UnidadTrabajo(ApplicationDbContext db)
        {
            _db = db;

            Articulo = new RepositorioArticulo(db);
            Categoria = new RepositorioCategoria(db);
            Stock = new RepositorioStock(db);
            Detalle = new RepositorioDetalle(db);
            Descripcion = new RepositorioDescripcion(db);
            DescripcionAdicional = new RepositorioDescripcionAdicional(db);
            ImgArticulo = new RepositorioImgArticulo(db);

        }

        readonly ApplicationDbContext _db;

        public IRepositorioArticulo Articulo { get; private set; }

        public IRepositorioCategoria Categoria { get; private set; }

        public IRepositorioStock Stock { get; private set; }

        public IRepositorioDetalle Detalle { get; private set; }

        public IRepositorioDescripcion Descripcion { get; private set; }

        public IRepositorioDescripcionAdicional DescripcionAdicional { get; private set; }

        public IRepositorioImgArticulo ImgArticulo { get; private set; }

        public void Dispose()
        {
            _db.Dispose();
        }

        public void Guardar()
        {
            _db.SaveChanges();
        }
    }
}
