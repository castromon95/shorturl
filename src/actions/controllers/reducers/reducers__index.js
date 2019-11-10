import {GET_REDUCERS} from "../../types";
import loadingCall from "../../base/helpers/loadingCall";
import simpleSuccess from "../../base/helpers/successHandlers/simpleSuccess";
import server from "../../../apis/server";

export default () => async (dispatch) => {
  await loadingCall(dispatch, server.get('/reducers'), simpleSuccess(GET_REDUCERS));
};