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

        public int IdSubCategoria { get; set; }

        public int IdPrecio { get; set; }

        public int IdDetalle { get; set; }

        public int IdImgPreviewArticulo { get; set; }

        public string NomArticulo { get; set; }

        public string CodArticulo { get; set; }

        [ForeignKey("IdSubCategoria")]
        public SubCategorias SubCategorias { get; set; }

        [ForeignKey("IdPrecio")]
        public Precio Precio { get; set; }

        [ForeignKey("IdDetalle")]
        public Detalles Detalles { get; set; }

        [ForeignKey("IdImgPreviewArticulo")]
        public ImgPreviewArticulos ImgPreviewArticulos { get; set; }

    }
}
