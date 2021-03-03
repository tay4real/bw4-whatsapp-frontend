import { components_action_types as c } from "../actions/constants";

const initialState = {
  showInfoSidebar: false,
};

export default function compoentsReducer(state = initialState, action) {
  switch (action.type) {
    case c.TOGGLE_INFOSIDEBAR:
      return { showInfoSidebar: !state.showInfoSidebar };

    default:
      return state;
  }
}
