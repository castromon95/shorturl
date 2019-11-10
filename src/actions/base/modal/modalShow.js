import {SHOW_MODAL} from "../../types";

export default (data) => {
  return ({type: SHOW_MODAL, payload: data});
};