import React, { Component, Fragment } from "react";
import image from "./images/placeimg_640_480_nature.jpg";

export default class CardProduct extends Component {
  state = {
    order: 0,
  };
  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };
  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };
  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
  render() {
    return (
      <Fragment>
        <div className="img-thumb-product">
          <img src={image} alt="" />
        </div>
        <p className="product-title">Daging Ayam</p>
        <p className="product-price">Rp. 20.000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order}></input>
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </Fragment>
    );
  }
}
