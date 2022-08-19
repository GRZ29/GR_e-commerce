using GR.System.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GR.System.DataAccess.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Articulos> Articulos { get; set; }
        public DbSet<Categorias> Categorias { get; set; }
        public DbSet<Colores> Colores { get; set; }
        public DbSet<Descripcion> Descripcion { get; set; }
        public DbSet<DescripcionAdicional> DescripcionAdicional { get; set; }
        public DbSet<Detalles> Detalles { get; set; }
        public DbSet<Precio> Precio { get; set; }
        public DbSet<Stock> Stock { get; set; }
        public DbSet<TipColores> TipColores { get; set; }
        public DbSet<ImgArticulos> ImgArticulos { get; set; }
        public DbSet<ImgCategorias> ImgCategorias { get; set; }
        public DbSet<ImgPreviewArticulos> ImgPreviewArticulos { get; set; }
    }
}
