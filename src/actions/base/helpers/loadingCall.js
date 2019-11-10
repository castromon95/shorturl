import {LOAD_END, LOAD_START} from "../../types";
import handleResponse from "./handleResponse";

export default async (dispatch, apiCall, onSuccess, path = null, postActions = [], callbacks = [], onError = null) => {
  dispatch({type: LOAD_START});
  const response = await apiCall;
  handleResponse(dispatch, response, onSuccess, path, postActions, callbacks, onError);
  dispatch({type: LOAD_END});
  return response;
}