import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import image1 from "./images/placeimg_640_480_nature.jpg";

class CardProduct extends Component {
  state = {
    order: 4,
  };
  handlePlus = () => {
    // alert("+");
    this.setState({
      order: this.state.order + 1,
    });
  };
  handleMinus = () => {
    // alert("-");
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order - 1,
      });
    }
  };
  render() {
    return (
      <Fragment>
        <div className="img-thumb-product">
          <img src={image1} alt="" />
        </div>
        <p className="product-title">Daging Ayam</p>
        <p className="product-price">Rp. 20000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="tex" value={this.state.order}></input>
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </Fragment>
    );
  }
}
export default CardProduct;
