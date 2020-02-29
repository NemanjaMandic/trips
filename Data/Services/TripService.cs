using System.Collections.Generic;
using System.Linq;

namespace trips.Data
{

    public class TripService : ITripService
    {
        public void AddTrip(Trip trip)
        {
           Data.Trips.Add(trip);
        }

        public void DeleteTrip(int tripId)
        {
           var trip =  Data.Trips.FirstOrDefault(n => n.Id == tripId);
           if(trip != null){
               Data.Trips.Remove(trip);
           }
        }

        public override bool Equals(object obj)
        {
            return base.Equals(obj);
        }

        public List<Trip> GetAllTrips() => Data.Trips.ToList();
        

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public Trip GetTripById(int tripId) => Data.Trips.FirstOrDefault(n => n.Id == tripId);

        public override string ToString()
        {
            return base.ToString();
        }

        public void UpdateTrip(int tripId, Trip trip)
        {
            var oldTrip =  Data.Trips.FirstOrDefault(n => n.Id == tripId);
            if(oldTrip != null){
                oldTrip.Name = trip.Name;
                oldTrip.Description = trip.Description;
                oldTrip.DateStarted = trip.DateStarted;
                oldTrip.DateCompleted = trip.DateCompleted;
            }
        }
    }
}