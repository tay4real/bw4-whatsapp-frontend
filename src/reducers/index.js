import { combineReducers } from "redux";
import user from "./userReducer";
import allUsers from "./allUsersReducer";
import componentsReducer from "./compoenetsReducer";

const rootReducer = combineReducers({
  user,
  allUsers,
  components: componentsReducer,
});

export default rootReducer;
