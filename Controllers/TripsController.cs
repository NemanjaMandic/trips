using Microsoft.AspNetCore.Mvc;
using trips.Data;

namespace trips.Controllers
{
[Route("api/[controller]")]
public class TripsController: Controller {

 private ITripService service;
    public TripsController(ITripService service){
        this.service = service;
    }

    [HttpGet("SingleTrip/{id}")]
    public IActionResult GetTripById(int id){
        var trip = service.GetTripById(id);
        return Ok(trip);
    }
    [HttpPost("AddTrip")]
    public IActionResult AddTrip([FromBody]Trip trip){
        if(trip != null){
            service.AddTrip(trip);
        }
        return Ok();
    }

    [HttpPut("UpdateTrip/{id}")]
    public IActionResult UpdateTrip(int id, [FromBody] Trip trip){
        service.UpdateTrip(id, trip);
        return Ok(trip);
    }

    [HttpDelete("DeleteTrip/{id}")]
    public IActionResult DeleteTrip(int id){
        service.DeleteTrip(id);
        return Ok();
    }

    [HttpGet("[action]")]
    public IActionResult GetTrips(){
        var allTrips = service.GetAllTrips();
        return Ok(allTrips);
    }
    }
}