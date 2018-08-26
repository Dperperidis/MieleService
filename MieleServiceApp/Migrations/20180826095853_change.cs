using Microsoft.EntityFrameworkCore.Migrations;

namespace MieleServiceApp.Migrations
{
    public partial class change : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PostCode",
                table: "Technicians",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<string>(
                name: "PhoneNumber",
                table: "Technicians",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "PostCode",
                table: "Technicians",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "PhoneNumber",
                table: "Technicians",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
