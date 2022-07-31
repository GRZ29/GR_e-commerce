using Microsoft.EntityFrameworkCore.Migrations;

namespace GR.System.DataAccess.Migrations
{
    public partial class StoreProcedure : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var createProcSql =
            @"EXEC('CREATE OR ALTER PROC usp_ListarArticulos
            AS            SELECT Articulos.Id, 
                                 Articulos.NomArticulo, 
                                 Articulos.IdCategoria,
                                 Articulos.IdPrecio,
                                 Articulos.IdDetalle,
                                 Categorias.NomCategoria, 
                                 Precio.Costo
                          FROM Articulos , Categorias , Precio , Detalles , Descripcion , DescripcionAdicional 
                          WHERE Articulos.IdCategoria = Categorias.Id and Articulos.IdPrecio = Precio.Id and Articulos.IdDetalle = Detalles.Id and Detalles.IdDesc = Descripcion.Id and Detalles.IdDesAdicional = DescripcionAdicional.Id')";
            migrationBuilder.Sql(createProcSql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            var dropProcSql = "DROP PROC usp_GetAllTodoItemsByStatus";
            migrationBuilder.Sql(dropProcSql);
        }
    }
}
