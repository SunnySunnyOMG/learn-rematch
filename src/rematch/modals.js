export const count = {
  // initial state
  state: {
    sum: 0,
    time: 0
  },
  reducers: {
    // handle state changes with pure functions
    add(state, payload = 1) {
      console.log("add", state);
      return {
        ...state,
        sum: state.sum + payload
      };
    },
    minus(state, payload = 1) {
      return {
        ...state,
        sum: state.sum - payload
      };
    }
  }
  // effects: {
  //   // handle state changes with impure functions.
  //   // use async/await for async actions
  //   async incrementAsync(payload, rootState) {
  //     await new Promise(resolve => setTimeout(resolve, 1000));
  //     this.increment(payload);
  //   }
  // }
};
