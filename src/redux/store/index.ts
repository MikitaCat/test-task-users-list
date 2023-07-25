import { rootReducer } from "./../reducers/index";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const isDevelopment = process.env.NODE_ENV === "development";

const storeEnhancer = isDevelopment
  ? composeWithDevTools(applyMiddleware(thunk))
  : applyMiddleware(thunk);

export const store = createStore(rootReducer, storeEnhancer);
