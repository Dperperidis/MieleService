using Microsoft.AspNetCore.Mvc;
using MieleServiceApp.Data;
using MieleServiceApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MieleServiceApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PartnersController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private SqlContext _ctx;

        public PartnersController(SqlContext ctx, IAuthRepository repo)
        {
            _ctx = ctx;
            _repo = repo;
        }

        [Route("coPartner")]
        [HttpGet]
        public IActionResult GetPartners()
        {
            try
            {
 

                var result = _ctx.Partners.ToList();
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest("Κάτι πήγε στραβά");
            }
        }



    }
}
