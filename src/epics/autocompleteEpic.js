import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { SEARCH_PLACES } from "../constants/actionTypes";
import {
  searchPlacesSuccess,
  searchPlacesError,
} from "../actions/autocompleteActions";
import { from } from "rxjs";
import { searchPlacesApi } from "../services/autocompleteService";

export const autocompleteEpic = (action$) =>
  action$.pipe(
    ofType(SEARCH_PLACES),
    mergeMap((action) =>
      from(searchPlacesApi(action.payload)).pipe(
        map((response) => searchPlacesSuccess(response.data.predictions)),
        catchError((error) => {
          // Handle error
          console.error("Autocomplete error:", error);
          return searchPlacesError(error.message);
        })
      )
    )
  );
