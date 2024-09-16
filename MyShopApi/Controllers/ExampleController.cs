using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[Route("api/[controller]")]
[ApiController]
public class ExampleController : ControllerBase
{
    // GET: api/example/example-endpoint
    [HttpGet("example-endpoint")]
    public IActionResult GetExampleData()
    {
        var exampleData = new List<object>
        {
            new { Id = 1, Name = "Item 1" },
            new { Id = 2, Name = "Item 2" }
        };

        return Ok(exampleData); // Returns a 200 OK response with example data
    }

    // POST: api/example/example-endpoint
    [HttpPost("example-endpoint")]
    public IActionResult CreateExampleItem([FromBody] dynamic item)
    {
        // Here, you can add code to handle the creation of a new item
        // For now, it just returns the item back
        return CreatedAtAction(nameof(GetExampleData), new { id = 3 }, item); // Returns a 201 Created response
    }
}
