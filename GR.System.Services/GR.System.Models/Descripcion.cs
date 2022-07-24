using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.Models
{
    public class Descripcion
    {
        [Key]
        public int Id { get; set; }

        public string Ancho { get; set; }

        public string Alto { get; set; }

        public string Fondo { get; set; }
    }
}
