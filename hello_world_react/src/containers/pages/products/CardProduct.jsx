import React, { Component, Fragment } from "react";
import image from "./images/placeimg_640_480_nature.jpg";
// import { connect } from "react-redux";
// import ActionType from "../../../redux/reducer/globalActionType";
import { RootContext } from "../Home";
class CardProduct extends Component {
  //   state = {
  //     order: 0,
  //   };
  //   handleCounterChange = (newValue) => {
  //     this.props.onCounterChange(newValue);
  //   };
  //   handlePlus = () => {
  //     this.setState(
  //       {
  //         order: this.state.order + 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   };
  //   handleMinus = () => {
  //     if (this.state.order > 0) {
  //       this.setState(
  //         {
  //           order: this.state.order - 1,
  //         },
  //         () => {
  //           this.handleCounterChange(this.state.order);
  //         }
  //       );
  //     }
  //   };
  render() {
    console.log(this.props);
    return (
      <RootContext.Consumer>
        {(value) => {
          console.log(this.value);
          return (
            <Fragment>
              <div className="img-thumb-product">
                <img src={image} alt="" />
              </div>
              <p className="product-title">Daging Ayam</p>
              <p className="product-price">Rp. 20.000</p>
              <div className="counter">
                {/* <button className="minus" onClick={this.props.handleMinus}> */}
                <button className="minus" onClick={() => null}>
                  -
                </button>
                {/* <input type="text" value={this.props.order}></input> */}
                <input type="text" value={0}></input>
                {/* <button className="plus" onClick={this.props.handlePlus}> */}
                <button className="plus" onClick={() => null}>
                  +
                </button>
              </div>
            </Fragment>
          );
        }}
      </RootContext.Consumer>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };
// const mapDispatchtoProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchtoProps)(CardProduct);
export default CardProduct;
