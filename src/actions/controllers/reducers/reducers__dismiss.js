import {DISMISS_REDUCER} from "../../types";

export default () => {
  return {type: DISMISS_REDUCER, payload: {user: {shortened_url: null, original_url: null,}}};
};
