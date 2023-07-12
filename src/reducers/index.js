import { combineReducers } from "redux";
import autocompleteReducer from "./autocompleteReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  autocomplete: autocompleteReducer,
  search: searchReducer,
});

export default rootReducer;
