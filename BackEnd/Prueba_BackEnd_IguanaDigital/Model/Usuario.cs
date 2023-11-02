using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prueba_BackEnd_IguanaDigital.Model
{
    public class Usuario
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string NombreUsuario { get; set; }

        [Required]
        public string PrimerNombre { get; set; }

        [Required]
        public string SegundoNombre { get; set; }

        [Required]
        public string PrimerApellido { get; set; }

        [Required]
        public string SegundoApellido { get; set; }

        [Required]
        public int IdDepartamento { get; set; }

        [Required]
        public int IdCargo { get; set; }

        [ForeignKey("IdDepartamento")]
        public Departamento? Departamento { get; set; } = null;

        [ForeignKey("IdCargo")]
        public Cargo? Cargo { get; set; } = null;

    }
}
