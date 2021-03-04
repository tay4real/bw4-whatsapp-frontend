import { combineReducers } from "redux";
import user from "./userReducer";
import allUsers from "./allUsersReducer";
import componentsReducer from "./compoenetsReducer";
import currentChat from "./currentChatReducer";

const rootReducer = combineReducers({
  user,
  allUsers,
  components: componentsReducer,
  currentChat,
});

export default rootReducer;
