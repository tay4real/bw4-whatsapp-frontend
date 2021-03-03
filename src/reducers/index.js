import { combineReducers } from "redux";
import user from "./userReducer";
import allUsers from "./allUsersReducer";

const rootReducer = combineReducers({
  user,
  allUsers,
});

export default rootReducer;
