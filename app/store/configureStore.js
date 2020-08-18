import { combineReducers } from "redux";
import { createStore } from "redux";
import decks from "./decks";
import { loadingBarReducer } from "react-redux-loading";
import middleware from "../middleware";

export default function configureStore() {
  const store = createStore(
    combineReducers({
      decks,
      loadingBar: loadingBarReducer,
    }),
    middleware
  );
  return store;
}
