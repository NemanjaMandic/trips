import axios from "axios";

export const GET_ALL_TRIPS = "GET_ALL_TRIPS";
export const GET_ALL_TRIPS_SUCCESS = "GET_ALL_TRIPS_SUCCESS";
export const GET_ALL_TRIPS_FAIL = "GET_ALL_TRIPS_FAIL";

const getTripsSuccess = payload => ({
  type: GET_ALL_TRIPS_SUCCESS,
  payload
});

const getTripsFail = payload => ({
  type: GET_ALL_TRIPS_FAIL,
  payload
});

export const getAllTrips = () => dispatch => {
  dispatch({ type: GET_ALL_TRIPS });
  return axios
    .get("api/Trips/GetTrips")
    .then(res => {
      const response = res.data;
      dispatch(getTripsSuccess(response));
    })
    .catch(error => {
      dispatch(getTripsFail(error));
      return Promise.reject({});
    });
};
