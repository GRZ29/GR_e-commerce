using Microsoft.EntityFrameworkCore.Migrations;

namespace GR.System.DataAccess.Migrations
{
    public partial class ImgPreviewArticulosToDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdImgPreviewArticulo",
                table: "Articulos",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ImgPreviewArticulos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Img = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImgPreviewArticulos", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Articulos_IdImgPreviewArticulo",
                table: "Articulos",
                column: "IdImgPreviewArticulo");

            migrationBuilder.AddForeignKey(
                name: "FK_Articulos_ImgPreviewArticulos_IdImgPreviewArticulo",
                table: "Articulos",
                column: "IdImgPreviewArticulo",
                principalTable: "ImgPreviewArticulos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Articulos_ImgPreviewArticulos_IdImgPreviewArticulo",
                table: "Articulos");

            migrationBuilder.DropTable(
                name: "ImgPreviewArticulos");

            migrationBuilder.DropIndex(
                name: "IX_Articulos_IdImgPreviewArticulo",
                table: "Articulos");

            migrationBuilder.DropColumn(
                name: "IdImgPreviewArticulo",
                table: "Articulos");
        }
    }
}
