using Microsoft.EntityFrameworkCore.Migrations;

namespace GR.System.DataAccess.Migrations
{
    public partial class SubCategoriasToDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Articulos_Categorias_IdCategoria",
                table: "Articulos");

            migrationBuilder.RenameColumn(
                name: "IdCategoria",
                table: "Articulos",
                newName: "IdSubCategoria");

            migrationBuilder.RenameIndex(
                name: "IX_Articulos_IdCategoria",
                table: "Articulos",
                newName: "IX_Articulos_IdSubCategoria");

            migrationBuilder.CreateTable(
                name: "SubCategorias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomSubCategoria = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IdCategoria = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubCategorias", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SubCategorias_Categorias_IdCategoria",
                        column: x => x.IdCategoria,
                        principalTable: "Categorias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SubCategorias_IdCategoria",
                table: "SubCategorias",
                column: "IdCategoria");

            migrationBuilder.AddForeignKey(
                name: "FK_Articulos_SubCategorias_IdSubCategoria",
                table: "Articulos",
                column: "IdSubCategoria",
                principalTable: "SubCategorias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Articulos_SubCategorias_IdSubCategoria",
                table: "Articulos");

            migrationBuilder.DropTable(
                name: "SubCategorias");

            migrationBuilder.RenameColumn(
                name: "IdSubCategoria",
                table: "Articulos",
                newName: "IdCategoria");

            migrationBuilder.RenameIndex(
                name: "IX_Articulos_IdSubCategoria",
                table: "Articulos",
                newName: "IX_Articulos_IdCategoria");

            migrationBuilder.AddForeignKey(
                name: "FK_Articulos_Categorias_IdCategoria",
                table: "Articulos",
                column: "IdCategoria",
                principalTable: "Categorias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
