import { current_chat_whith as c } from "./constants";

export const setCurrentChat = (room) => ({
  type: c.SET_CURRENT_CHAT,
  payload: room,
});
