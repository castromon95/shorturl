export default (msg, type) => {
  return {
    info: {
      message: msg,
      type: type
    }
  };
}