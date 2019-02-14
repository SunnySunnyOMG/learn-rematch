import React from "react";

// import { connect } from "react-redux";

function NumBoard(props) {
  return <h1>this num is {props.num || "?"}</h1>;
}

export default NumBoard;

// const mapState = state => {
//   console.log("store state", state);
//   return {
//     num: state.count.sum
//   };
// };
// export default connect(mapState)(NumBoard);
