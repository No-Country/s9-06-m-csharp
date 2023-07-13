
using buddyUp.DTOs;
using buddyUp.Models;
using Microsoft.AspNetCore.Identity;

namespace buddyUp.Data
{
    public interface IUserProfileRepository
    {
        IdentityUser? GetByEmail(string email);
        IdentityUser? GetById(string id);
        int SetBirthdayAndAge(string id, DateTime birthday);
        int SetName(string id, string name);
        int SetBio(string id, string bio);
        int SetQuote(string id, string quote);
        int SetGender(string id, string quote);
        int SetTags(string id, List<TagDto> tags);
        //User SetProfile(User user);
    }
}
