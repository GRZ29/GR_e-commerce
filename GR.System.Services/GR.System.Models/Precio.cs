using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.Models
{
    public class Precio
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Iva { get; set; }
    }
}
