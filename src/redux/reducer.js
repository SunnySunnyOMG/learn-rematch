const numReducer = (state = { sum: 0, time: 0 }, action) => {
  switch (action.type) {
    case "ADD":
      return {
        sum: state.sum + 1,
        time: state.time + 1
      };

    case "MINUS":
      return {
        sum: state.sum - 1,
        time: state.time + 1
      };

    default:
      return state;
  }
};

export default numReducer;
