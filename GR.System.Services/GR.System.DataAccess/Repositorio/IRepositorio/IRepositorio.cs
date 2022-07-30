using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.DataAccess.Repositorio.IRepositorio
{
    public interface IRepositorio<T> where T : class
    {
        T Buscar(int id);

        T Buscar(Expression<Func<T, bool>> filtro = null, string propiedades = null);

        IEnumerable<T> Listar(Expression<Func<T, bool>> filtro = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, string propiedades = null, string propiedadesDentro = null);

        void Agregar(T entidad);

        void Remover(int id);

        void Remover(T entidad);

        void RemoverRango(IEnumerable<T> entidades);
    }
}
