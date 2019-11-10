import {
  HIDE_MODAL,
  SHOW_MODAL
} from "../actions/types";

const INITIAL_STATE = {
  modalType: null,
  modalProps: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {...state, ...action.payload};
    case HIDE_MODAL:
      return INITIAL_STATE;
    default:
      return state;
  }
};