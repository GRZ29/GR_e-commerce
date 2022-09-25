using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.Models
{
    public class Colores
    {
        [Key]
        public int Id { get; set; }

        public string NomColor { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal PrecioColor { get; set; }

        public string HexColor { get; set; }
    }
}
