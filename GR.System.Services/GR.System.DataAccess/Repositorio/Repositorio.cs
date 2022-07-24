using GR.System.DataAccess.Data;
using GR.System.DataAccess.Repositorio.IRepositorio;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.DataAccess.Repositorio
{
    public class Repositorio<T> : IRepositorio<T> where T : class
    {
        public Repositorio(ApplicationDbContext db)
        {
            _db = db;
            _dbSet = _db.Set<T>();
        }

        readonly DbContext _db;

        internal DbSet<T> _dbSet;

        public void Agregar(T entidad)
        {
            _dbSet.Add(entidad);
        }

        public T Buscar(int id)
        {
            return _dbSet.Find(id);
        }

        public T Buscar(Expression<Func<T, bool>> filtro = null, string propiedades = null)
        {
            IQueryable<T> query = _dbSet;

            if (filtro != null)
            {
                query = query.Where(filtro);
            }

            if (!string.IsNullOrWhiteSpace(propiedades))
            {
                foreach (var propiedad in propiedades.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(propiedad);
                }
            }

            return query.FirstOrDefault<T>();
        }

        public IEnumerable<T> Listar(Expression<Func<T, bool>> filtro = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, string propiedades = null)
        {
            IQueryable<T> query = _dbSet;

            if (filtro != null)
            {
                query = query.Where(filtro);
            }

            if (!string.IsNullOrWhiteSpace(propiedades))
            {
                foreach (var propiedad in propiedades.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(propiedad);
                }
            }

            if (orderBy != null)
            {
                return orderBy(query);
            }

            return query;
        }

        public void Remover(int id)
        {
            T entidad = _dbSet.Find(id);
            if (entidad != null)
            {
                Remover(entidad);
            }
        }

        public void Remover(T entidad)
        {
            _dbSet.Remove(entidad);
        }

        public void RemoverRango(IEnumerable<T> entidades)
        {
            _dbSet.RemoveRange(entidades);
        }
    }
}
