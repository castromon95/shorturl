export default (type) => {
  return (dispatch, data) => {
    dispatch({type: type, payload: data});
  };
}