using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.Models
{
    public class SubCategorias
    {
        [Key]
        public int Id { get; set; }

        public string NomSubCategoria { get; set; }

        public int IdCategoria { get; set; }

        [ForeignKey("IdCategoria")]
        public Categorias Categorias { get; set; }
    }
}
