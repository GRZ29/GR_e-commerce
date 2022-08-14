using Microsoft.EntityFrameworkCore.Migrations;

namespace GR.System.DataAccess.Migrations
{
    public partial class ImgArticulosAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ImgArticulos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdArticulo = table.Column<int>(type: "int", nullable: false),
                    Img = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImgArticulos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ImgArticulos_Articulos_IdArticulo",
                        column: x => x.IdArticulo,
                        principalTable: "Articulos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ImgArticulos_IdArticulo",
                table: "ImgArticulos",
                column: "IdArticulo");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ImgArticulos");
        }
    }
}
