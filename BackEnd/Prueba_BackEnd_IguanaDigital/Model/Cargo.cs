using System.ComponentModel.DataAnnotations;

namespace Prueba_BackEnd_IguanaDigital.Model
{
    public class Cargo
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Codigo { get; set; }

        [Required]
        public string Nombre { get; set; }

        [Required]
        public bool Activo { get; set; }

        [Required]
        public int IdUsuarioCreacion { get; set; }

        //Coleccion
        public ICollection<Usuario>? Usuarios { get; set; } = null!;
    }
}
