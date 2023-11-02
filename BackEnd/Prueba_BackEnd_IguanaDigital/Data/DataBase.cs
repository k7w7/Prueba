using Microsoft.EntityFrameworkCore;
using Prueba_BackEnd_IguanaDigital.Model;

namespace Prueba_BackEnd_IguanaDigital.Data
{
    public class DataBase: DbContext
    {
        public DataBase(DbContextOptions<DataBase> options):base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Departamento> Departamentos { get; set; }
        public DbSet<Cargo> Cargos { get; set; }
    }
}
