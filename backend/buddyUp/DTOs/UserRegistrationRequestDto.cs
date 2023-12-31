﻿using System.ComponentModel.DataAnnotations;

namespace buddyUp.DTOs
{
    public class UserRegistrationRequestDto
    {        
        public string FullName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
