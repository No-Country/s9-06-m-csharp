using buddy_up.Controllers;
using buddyUp.Data;
using buddyUp.DTOs;
using buddyUp.Helpers;
using buddyUp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Security.Claims;

namespace buddyUp.Controllers
{
    [ApiController]
    [Route("api/account")]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userRepository;
        //private readonly JwtService _jwtService;
        private readonly ILogger<TagsController> _logger;
        private readonly UserManager<IdentityUser> _userManager;       
        private readonly IConfiguration _configuration;

        public UserProfileController(IUserProfileRepository userRepository, ILogger<TagsController> logger, UserManager<IdentityUser> userManager, IConfiguration configuration)
        {
            _userRepository = userRepository;
            //_jwtService = jwtService;
            _logger = logger;
            _userManager = userManager;
            _configuration = configuration;
        }


        //[Authorize]
        [HttpPut]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("b-day")]
        public ActionResult<Response> UpdateBirthday([FromBody] BirthdayDto dto)
        {
            try
            {
                var userId = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id")?.Value;
                if (userId is not null)
                {
                    int cambios = _userRepository.SetBirthdayAndAge(userId, dto.birthday);
                    if (cambios == 1)
                    {
                        return Ok(new Response
                        {
                            Message = "The profile birthday was added/updated.",
                            Status = "OK"
                        });
                    }
                    else
                    {
                        return BadRequest(new Response
                        {
                            Message = "The birthad cannot be store.",
                            Status = "NOT OK"
                        });
                    }


                }
                else
                {
                    return Unauthorized();
                }
            }
            catch (Exception _)
            {
                return new JsonResult(new { error = _.Message });
            }
        }
        [HttpPut]
        [Route("name")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public ActionResult<Response> UpdateName([FromBody] OneStringDto dto)
        {
            try
            {
                var userId = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id")?.Value;
                if (userId is not null)
                {
                    int cambios = _userRepository.SetName(userId, dto.description);
                    if (cambios == 1)
                    {
                        return Ok(new Response
                        {
                            Message = "The name of the user was added/updated.",
                            Status = "OK"
                        });
                    }
                    else
                    {
                        return BadRequest(new Response
                        {
                            Message = "The name cannot be store.",
                            Status = "NOT OK"
                        });
                    }
                }
                else
                {
                    return Unauthorized();
                }
            }
            catch (Exception _)
            {
                return new JsonResult(new { error = _.Message });
            }
        }
        [HttpPut]
        [Route("bio")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public ActionResult<Response> UpdateBio([FromBody] OneStringDto dto)
        {
            try
            {
                var userId = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id")?.Value;
                if (userId is not null)
                {
                    int cambios = _userRepository.SetBio(userId, dto.description);
                    if (cambios == 1)
                    {
                        return Ok(new Response
                        {
                            Message = "The bio of the user was added/updated.",
                            Status = "OK"
                        });
                    }
                    else
                    {
                        return BadRequest(new Response
                        {
                            Message = "The bio cannot be store.",
                            Status = "NOT OK"
                        });
                    }
                }
                else
                {
                    return Unauthorized();
                }
            }
            catch (Exception _)
            {
                return new JsonResult(new { error = _.Message });
            }
        }
        [HttpPut]
        [Route("quote")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public ActionResult<Response> UpdateQuote([FromBody] OneStringDto dto)
        {
            try
            {
                var userId = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id")?.Value;
                if (userId is not null)
                {
                    int cambios = _userRepository.SetQuote(userId, dto.description);
                    if (cambios == 1)
                    {
                        return Ok(new Response
                        {
                            Message = "The quote of the user was added/updated.",
                            Status = "OK"
                        });
                    }
                    else
                    {
                        return BadRequest(new Response
                        {
                            Message = "The quote cannot be store.",
                            Status = "NOT OK"
                        });
                    }
                }
                else
                {
                    return Unauthorized();
                }
            }
            catch (Exception _)
            {
                return new JsonResult(new { error = _.Message });
            }
        }
        [HttpPut]
        [Route("gender")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public ActionResult<Response> UpdateGender([FromBody] OneStringDto dto)
        {
            try
            {
                var userId = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id")?.Value;
                if (userId is not null)
                {
                    int cambios = _userRepository.SetGender(userId, dto.description);
                    if (cambios == 1)
                    {
                        return Ok(new Response
                        {
                            Message = "The gender of the user was ESTABLISHED in the db.",
                            Status = "OK"
                        });
                    }
                    else
                    {
                        return BadRequest(new Response
                        {
                            Message = "The gender cannot be store.",
                            Status = "NOT OK"
                        });
                    }
                }
                else
                {
                    return Unauthorized();
                }
            }
            catch (Exception _)
            {
                return new JsonResult(new { error = _.Message });
            }
        }
        [HttpPut]
        [Route("tag")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public ActionResult<Response> UpdateTag([FromBody] List<TagDto> tags)
        {
            try
            {
                var userId = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "Id")?.Value;

                if (userId is not null)
                {
                    int cambiosTablaAsociativa = _userRepository.SetTags(userId, tags);
                    if (cambiosTablaAsociativa == tags.Count())
                    {
                        return Ok(new Response
                        {
                            Message = $"All tags were added to the user",
                            Status = "OK"
                        });
                    }                    
                    else
                    {
                        return BadRequest(new Response
                        {
                            Message = $"Can't add a tag without other data in profile",
                            Status = "NOT OK"
                        });
                    }
                }
                else
                {
                    return Unauthorized();
                }
            }
            catch (Exception _)
            {
                return new JsonResult(_.Message);
            }
        }


    }
}

    