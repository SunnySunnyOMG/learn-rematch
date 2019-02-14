import React from "react";

// import { connect } from "react-redux";
// import * as actions from "./redux/action";

class Caculator extends React.Component {
  state = {
    num: 0,
    step: 1
  };

  add = num =>
    this.setState(preState => ({
      num: preState.num + num
    }));

  onClickAdd = () => this.add(this.state.step);
  onClickMinus = () => this.add(-this.state.step);

  onInputChange = e =>
    this.setState({
      step: Number(e.target.value)
    });

  render() {
    return (
      <>
        <button onClick={this.onClickAdd}>+</button>
        {this.state.num}
        <button onClick={this.onClickMinus}>-</button>
        step:
        <input
          value={this.state.step}
          onChange={this.onInputChange}
          type="number"
        />
      </>
    );
  }
}

export default Caculator;

// const mapDispatch = dispatch => {
//   return {
//     onClickAdd: () => dispatch(actions.add()),
//     onClickMinus: () => dispatch(actions.minus())
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     onClickAdd: () => dispatch.count.add(),
//     onClickMinus: () => dispatch.count.minus()
//   };
// };

// export default connect(
//   null,
//   mapDispatch
// )(Caculator);
