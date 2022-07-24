using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.Models
{
    public class Stock
    {
        [Key]
        public int Id { get; set; }

        public int IdArticulo { get; set; }

        public int Cantidad { get; set; }

        [ForeignKey("IdArticulo")]
        public Articulos Articulos { get; set; }
    }
}
