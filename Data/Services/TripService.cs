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
            throw new System.NotImplementedException();
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

        public Trip GetTripById(int tripId)
        {
            throw new System.NotImplementedException();
        }

        public override string ToString()
        {
            return base.ToString();
        }

        public void UpdateTrip(int tripId, Trip trip)
        {
            throw new System.NotImplementedException();
        }
    }
}