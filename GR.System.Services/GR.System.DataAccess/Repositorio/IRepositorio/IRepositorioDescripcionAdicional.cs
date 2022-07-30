﻿using GR.System.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.DataAccess.Repositorio.IRepositorio
{
    public interface IRepositorioDescripcionAdicional : IRepositorio<DescripcionAdicional>
    {
        void Actualizar(DescripcionAdicional descripcionAdicional);
    }
}
