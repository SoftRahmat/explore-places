import { ADD_TO_SEARCH_HISTORY } from "../constants/actionTypes";

const initialState = {
  history: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SEARCH_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history],
      };
    default:
      return state;
  }
};

export default searchReducer;
