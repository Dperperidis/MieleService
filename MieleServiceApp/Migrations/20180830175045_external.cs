using Microsoft.EntityFrameworkCore.Migrations;

namespace MieleServiceApp.Migrations
{
    public partial class external : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ExternalTechs",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Area = table.Column<string>(nullable: true),
                    Date = table.Column<string>(nullable: true),
                    customerId = table.Column<string>(nullable: true),
                    FullName = table.Column<string>(nullable: true),
                    Order = table.Column<string>(nullable: true),
                    Origin = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    Damage = table.Column<string>(nullable: true),
                    ServiceCost = table.Column<string>(nullable: true),
                    PartsCost = table.Column<string>(nullable: true),
                    TotalCost = table.Column<string>(nullable: true),
                    ServiceDesc = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExternalTechs", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ExternalTechs");
        }
    }
}
