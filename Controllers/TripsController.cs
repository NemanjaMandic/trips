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

    [HttpPost("AddTrip")]
    public IActionResult AddTrip([FromBody]Trip trip){
        if(trip != null){
            service.AddTrip(trip)
        }
        return Ok();
    }

    [HttpGet("GetTrips")]
    public IActionResult GetTrips(){
        var allTrips = service.GetAllTrips();
        return Ok(allTrips);
    }
    }
}