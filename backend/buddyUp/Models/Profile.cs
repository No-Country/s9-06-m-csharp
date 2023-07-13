

using buddyUp.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace buddyUp.Models
{
    public class Profile
    {       
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        [JsonIgnore]
        public ApplicationUser User { get; set; } = null!;
        public string name { get; set; } = string.Empty;
        public string quote { get; set; } = string.Empty;
        public string bio { get; set; } = string.Empty;
        public int age { get; set; } //calculado
        public DateTime date_of_birth { get; set; }
        public string gender { get; set; } = string.Empty;
        [JsonIgnore]
        public List<Tag> tags { get; set; } = null;
        //public List<Tag> tags { get; set; } = new();
        [JsonIgnore]
        public List<Photo> photos { get; set; } = new(); // alojada en otra db?
        //public List<ApplicationUser> liked_user_of { get; } = new();
        //public List<ApplicationUser> liked_users { get; } = new();
        //public List<ApplicationUser> matched_users { get; } = new();
        //public string locatoin { get; set; } = string.Empty;
       
    }
}
