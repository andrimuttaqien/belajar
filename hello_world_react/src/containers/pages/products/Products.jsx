import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct";
import "./Product.css";

class Product extends Component {
  state = {
    order: 4,
  };
  handlePlus = () => {
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
        <div className="box-product">
          <div className="card">
            <div className="header-product">
              <h1>Product</h1>
              <div className="logo"></div>
              <div className="troley">
                <div className="count">{this.state.order}</div>
              </div>
            </div>
            <CardProduct />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Product;
