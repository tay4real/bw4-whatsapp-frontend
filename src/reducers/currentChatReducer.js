import { current_chat_whith as c } from "../actions/constants";

const initialState = {
  messages: [],
  to: {},
  loading: false,
  error: null,
};

export default function currentChatReducers(state = initialState, action) {
  switch (action.type) {
    case c.SET_CURRENT_CHAT:
      return { ...state, to: action.payload };

    default:
      return state;
  }
}
