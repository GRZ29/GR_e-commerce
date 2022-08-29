using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.Models
{
    public class Tags
    {
        [Key]
        public int Id { get; set; }

        public string Tag { get; set; }
        public int IdArticulo { get; set; }

        [ForeignKey("IdArticulo")]
        public Articulos Articulos { get; set; }
    }
}
