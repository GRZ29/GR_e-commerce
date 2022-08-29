using Microsoft.EntityFrameworkCore.Migrations;

namespace GR.System.DataAccess.Migrations
{
    public partial class fixbugs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Busqueda_Articulos_IdArticulo",
                table: "Busqueda");

            migrationBuilder.DropForeignKey(
                name: "FK_Tags_Articulos_IdArticulo",
                table: "Tags");

            migrationBuilder.AlterColumn<int>(
                name: "IdArticulo",
                table: "Tags",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DescripcionLarga",
                table: "Descripcion",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "IdArticulo",
                table: "Busqueda",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Busqueda_Articulos_IdArticulo",
                table: "Busqueda",
                column: "IdArticulo",
                principalTable: "Articulos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tags_Articulos_IdArticulo",
                table: "Tags",
                column: "IdArticulo",
                principalTable: "Articulos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Busqueda_Articulos_IdArticulo",
                table: "Busqueda");

            migrationBuilder.DropForeignKey(
                name: "FK_Tags_Articulos_IdArticulo",
                table: "Tags");

            migrationBuilder.DropColumn(
                name: "DescripcionLarga",
                table: "Descripcion");

            migrationBuilder.AlterColumn<int>(
                name: "IdArticulo",
                table: "Tags",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "IdArticulo",
                table: "Busqueda",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Busqueda_Articulos_IdArticulo",
                table: "Busqueda",
                column: "IdArticulo",
                principalTable: "Articulos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Tags_Articulos_IdArticulo",
                table: "Tags",
                column: "IdArticulo",
                principalTable: "Articulos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
