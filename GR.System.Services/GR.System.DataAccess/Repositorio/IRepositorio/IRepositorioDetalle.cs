using GR.System.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.DataAccess.Repositorio.IRepositorio
{
    public interface IRepositorioDetalle : IRepositorio<Detalles>
    {
        void Actualizar(Detalles detalles);
    }
}
