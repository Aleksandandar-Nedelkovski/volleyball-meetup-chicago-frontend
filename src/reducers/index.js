import { combineReducers } from "redux";
import auth from "./auth";
import event from "./events";

export default combineReducers({
  auth,
  event
});
