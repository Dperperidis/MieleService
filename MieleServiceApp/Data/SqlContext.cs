using Microsoft.EntityFrameworkCore;
using MieleServiceApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MieleServiceApp.Data
{
    public class SqlContext : DbContext
    {
        public SqlContext(DbContextOptions<SqlContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Tech> Technicians { get; set; }
        public DbSet<Partners> Partners { get; set; }
        public DbSet<ExternalTechs> ExternalTechs { get; set; }
    }
}
