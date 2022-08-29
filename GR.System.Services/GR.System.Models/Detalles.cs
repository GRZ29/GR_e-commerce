using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.Models
{
    public class Detalles
    {
        [Key]
        public int Id { get; set; }

        public int IdDesc { get; set; }

        public int IdDesAdicional { get; set; }

        [ForeignKey("IdDesc")]

        public Descripcion Descripcion { get; set; }

        [ForeignKey("IdDesAdicional")]

        public DescripcionAdicional DescripcionAdicional { get; set; }

        public string DescripcionCorta { get; set; }

    }
}
