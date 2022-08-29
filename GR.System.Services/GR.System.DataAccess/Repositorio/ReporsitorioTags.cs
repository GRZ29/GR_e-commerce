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
    public class ReporsitorioTags : Repositorio<Tags>, IRepositorioTags
    {
        public ReporsitorioTags(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        readonly ApplicationDbContext _db;

        public void Actualizar(Tags tags)
        {
            var i = _db.Tags.FirstOrDefault(s => s.Id == tags.Id);

            if (i == null)
            {
                return;
            }

            i.Tag = tags.Tag;
        }
    }
}
