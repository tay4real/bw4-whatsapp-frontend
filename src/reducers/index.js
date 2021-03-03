import { combineReducers } from "redux";
import user from "./userReducer";
import componentsReducer from "./compoenetsReducer";
const rootReducer = combineReducers({
  user,
  components: componentsReducer,
});

export default rootReducer;
