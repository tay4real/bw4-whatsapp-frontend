import { components_action_types as c } from "../actions/constants";

const initialState = {
  showInfoSidebar: false,
  showProfileSidebar: false,
};

export default function compoentsReducer(state = initialState, action) {
  switch (action.type) {
    case c.TOGGLE_INFOSIDEBAR:
      return { ...state, showInfoSidebar: !state.showInfoSidebar };
    case c.TOGGLE_PROFILE_SIDEBAR:
      return { ...state, showProfileSidebar: !state.showProfileSidebar };
    default:
      return state;
  }
}
