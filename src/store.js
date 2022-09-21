import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./Services/Reducers/index";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

console.log("store data", store);

export default store;
