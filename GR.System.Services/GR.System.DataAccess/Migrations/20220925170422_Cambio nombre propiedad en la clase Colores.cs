using Microsoft.EntityFrameworkCore.Migrations;

namespace GR.System.DataAccess.Migrations
{
    public partial class CambionombrepropiedadenlaclaseColores : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "HexaColor",
                table: "Colores",
                newName: "HexColor");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "HexColor",
                table: "Colores",
                newName: "HexaColor");
        }
    }
}
