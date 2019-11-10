import { CREATE_REDUCER, GET_REDUCERS, DISMISS_REDUCER } from "../actions/types";

const INITIAL_STATE = {
  shortened_url: null,
  original_url: null,
  entries: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_REDUCER:
    case GET_REDUCERS:
    case DISMISS_REDUCER:
      return {...state, ...action.payload.user};
    default:
      return state;
  }
};