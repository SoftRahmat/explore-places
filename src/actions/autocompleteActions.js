import {
  SEARCH_PLACES,
  SEARCH_PLACES_SUCCESS,
  SEARCH_PLACES_ERROR,
} from "../constants/actionTypes";
import { searchPlacesApi } from "../services/autocompleteService";

export const searchPlaces = (searchText) => ({
  type: SEARCH_PLACES,
  payload: searchText,
});

export const searchPlacesSuccess = (results) => ({
  type: SEARCH_PLACES_SUCCESS,
  payload: results,
});

export const searchPlacesError = (error) => ({
  type: SEARCH_PLACES_ERROR,
  payload: error,
});

export const fetchPlaces = (searchText) => {
  return (dispatch) => {
    searchPlacesApi(searchText)
      .then((response) => {
        dispatch(searchPlacesSuccess(response.data.predictions));
      })
      .catch((error) => {
        dispatch(searchPlacesError(error.message));
      });
  };
};
