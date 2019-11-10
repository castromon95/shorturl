import {push} from "connected-react-router";
import {INFO_SHOW} from "../../types";
import infoPayload from "./payloadHandlers/infoPayload";
import {notification} from "antd";
import 'antd/es/notification/style/css';
import {NOT_FOUND} from "../../../routing/paths";

export default (dispatch, response, onSuccess, path = null, postActions = [], callbacks = [], onError = null) => {
  
  if (response === undefined) {
    dispatch({
      type: INFO_SHOW,
      payload: infoPayload('Error contacting server, please try later.', 'error')
    });
  } else if (response.data.success) {
    onSuccess(dispatch, response.data);
    showNotification(response);
    if(path !== null)
      dispatch(push(path));
    if (callbacks.length !== 0) {
      callbacks.forEach((callback) => {
        callback(response.data)
      })
    }
  } else if (!response.data.success) {
    if (onError)
      onError(dispatch, response.data);
    switch (response.status) {
      case 404:
        showNotification(response);
        dispatch(push(NOT_FOUND));
        break;
      default:
        showNotification(response);
        break;
    }
  }
  if (postActions.length !== 0) {
    postActions.forEach((action) => {dispatch(action(response.data))})
  }
}

const showNotification = (response) => {
  if (response.data.info) {
    notification[response.data.info.type]({
      message: response.data.info.message,
      duration: 4
    });
  }
};