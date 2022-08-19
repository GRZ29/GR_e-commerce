using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.Models
{
    public class Articulos
    {
        [Key]
        public int Id { get; set; }

        public int IdCategoria { get; set; }

        public int IdPrecio { get; set; }

        public int IdDetalle { get; set; }

        public int IdImgPreviewArticulo { get; set; }

        public string NomArticulo { get; set; }

        [ForeignKey("IdCategoria")]
        public Categorias Categorias { get; set; }

        [ForeignKey("IdPrecio")]
        public Precio Precio { get; set; }

        [ForeignKey("IdDetalle")]
        public Detalles Detalles { get; set; }

        [ForeignKey("IdImgPreviewArticulo")]
        public ImgPreviewArticulos ImgPreviewArticulos { get; set; }
    }
}
