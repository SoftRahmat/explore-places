import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";
import { autocompleteEpic } from "../epics/autocompleteEpic";

const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(autocompleteEpic);

  return store;
};

export default configureStore;
