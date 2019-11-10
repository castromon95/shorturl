const INITIAL_STATE = {
  message: null,
  type: null
};

export default (state = INITIAL_STATE, action) => {
  if (action.payload) {
    return {...state, ...action.payload.info};
  } else {
    return state;
  }
};