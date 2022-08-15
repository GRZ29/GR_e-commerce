using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.Models
{
    public class ImgCategorias
    {
        [Key]
        public int Id { get; set; }

        public string Img { get; set; }

        public string Nombre { get; set; }
    }
}
