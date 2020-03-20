import {
  GET_ALL_TRIPS,
  GET_ALL_TRIPS_SUCCESS,
  GET_ALL_TRIPS_FAIL
} from "../actions/tripActions";

const initialState = {
  loading: false,
  hasError: false,
  error: null,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRIPS:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_TRIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_ALL_TRIPS_FAIL:
      return {
        ...state,
        hasError: true,
        error: action.payload
      };

    default:
      return state;
  }
};
