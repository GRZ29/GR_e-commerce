﻿using System;
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

        void Guardar();
    }
}
