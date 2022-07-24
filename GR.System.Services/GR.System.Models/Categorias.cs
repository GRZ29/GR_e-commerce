using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.Models
{
    public class Categorias
    {
        [Key]
        public int Id { get; set; }

        public string NomCategoria { get; set; }

    }
}
