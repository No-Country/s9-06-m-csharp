using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using buddyUp.Models;

namespace buddyUp.Models
{
    public class Photo
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
        [ForeignKey("User")]
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        [JsonIgnore]
        [Column("userOwnerId")]
        public Profile UserOwner { get; set; } = new();
    }
}
