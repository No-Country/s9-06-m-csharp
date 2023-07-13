
using buddyUp.Data;
using buddyUp.DTOs;
using buddyUp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace buddy_up.Controllers
{
    [Route("api/tags")]
    [ApiController]
    public class TagsController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;
        private readonly ILogger<TagsController> _logger;
        public TagsController(ITagRepository tagRepository, ILogger<TagsController> logger)
        {
            _tagRepository = tagRepository;
            _logger = logger;
        }

        [HttpGet]
        //[Route("get")]
        public ActionResult<IEnumerable<Profile>>? Get()
        {
            return Ok(_tagRepository.GetAll());
        }

        //[Authorize(Roles = "admin")]
        [HttpGet("{id}")]
        public ActionResult<Profile> Get(int id)
        {
            var tag = _tagRepository.GetById(id).Result;
            if (tag is null)
            {
                return NotFound($"Tag with id = {id} not found");
            }
            return Ok(tag);
        }

        [HttpPost]
        public async Task<ActionResult<Profile>> Post([FromBody] Tag tag)
        {
            _tagRepository.Create(tag);

            return CreatedAtAction(nameof(Get), new { id = tag.Id }, tag);
        }
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Tag tag)
        {
            Tag existingTag = _tagRepository.GetById(id).Result!;

            if (existingTag is null)
            {
                return NotFound($"Tag with Id = {id} not found");
            }
            var cambios = _tagRepository.Update(id, tag);

            return Ok(new Response
            {
                Message = $"{cambios} tag/s where updated",
                Status = "OK"
            });
        }
        //[Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public ActionResult<Profile> Delete(int id)
        {
            Tag existingTag = _tagRepository.GetById(id).Result!;

            if (existingTag is null)
            {
                return NotFound($"Tag with Id = {id} not found");
            }
            _tagRepository.Delete(id);

            return Ok($"Tag with Id = {id} deleted");
        }
    }
}
