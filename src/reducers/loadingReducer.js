import {
  LOAD_END,
  LOAD_START
} from "../actions/types";

const INITIAL_STATE = {
  tableLoading: false,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_START:
      return {...state, loading: true};
    case LOAD_END:
      return {...state, loading: false};
    default:
      return state;
  }
};