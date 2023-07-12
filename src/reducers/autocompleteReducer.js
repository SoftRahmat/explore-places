import {
  SEARCH_PLACES_SUCCESS,
  SEARCH_PLACES_ERROR,
} from "../constants/actionTypes";

const initialState = {
  results: [],
  selectedPlace: null,
  error: null,
};

const autocompleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PLACES_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };
    case SEARCH_PLACES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default autocompleteReducer;
