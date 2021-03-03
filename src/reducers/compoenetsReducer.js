import { components_action_types as c } from "../actions/constants";

const initialState = {
  showNavBarMenu: false,
};

export default function compoentsReducer(state = initialState, action) {
  switch (action.type) {
    case c.TOGGLE_NAVBAR_MENU:
      return { showNavBarMenu: !state.navBarMenu };

    default:
      return state;
  }
}
