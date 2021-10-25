import React, { Component, Fragment } from "react";
import "./LifeCycleComponents.css";
import { connect } from "react-redux";
class LifeCycleComponents extends Component {
  // 1
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("Constructor");
  }
  // 2
  static getDerivedStateFromProps(props, state) {
    console.log("getDriverStateFromProps");
    return null;
  }
  // 4
  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(() => {
    //     this.setState({
    //         count: 2
    //     })
    // }, 3000)
  }
  // 5
  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");
    // console.log('nextPros', nextProps)
    console.log("nextStat", nextState);
    console.log("this state : ", this.state);
    console.groupEnd();
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }
  // 6
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  // 7
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }
  // 8
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  // 3
  render() {
    console.log("render");
    return (
      <Fragment>
        <button className="btn" onClick={this.changeCount}>
          Button Life Cycle Component ({this.state.count})
        </button>
        <hr></hr>
        <p>Total Product : {this.props.order} </p>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};
export default connect(mapStateToProps)(LifeCycleComponents);
