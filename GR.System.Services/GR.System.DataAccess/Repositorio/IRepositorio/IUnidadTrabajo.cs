using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.DataAccess.Repositorio.IRepositorio
{
    public interface IUnidadTrabajo : IDisposable
    {
        IRepositorioArticulo Articulo { get; }

        IRepositorioCategoria Categoria { get; }

        IRepositorioStock Stock { get; }

        IRepositorioDetalle Detalle { get; }

        IRepositorioDescripcion Descripcion { get; }

        IRepositorioDescripcionAdicional DescripcionAdicional { get; }

        IRepositorioImgArticulo ImgArticulo { get; }

        IRepositorioImgCategorias ImgCategorias { get; }

        void Guardar();
    }
}
