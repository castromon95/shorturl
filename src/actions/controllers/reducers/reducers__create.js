import {CREATE_REDUCER} from "../../types";
import loadingCall from "../../base/helpers/loadingCall";
import simpleSuccess from "../../base/helpers/successHandlers/simpleSuccess";
import server from "../../../apis/server";
import modalDismiss from "../../base/modal/modalDismiss";


export default (formValues) => async (dispatch) => {
  await loadingCall(
      dispatch,
      server.post('/reducers', formValues),
      simpleSuccess(CREATE_REDUCER),
      null,
      [modalDismiss],
      [],
      simpleSuccess(CREATE_REDUCER)
  );
};
