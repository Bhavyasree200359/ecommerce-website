import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { thunk } from "redux-thunk";
import reducer from "../redux/reducer";

const middleWare = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
