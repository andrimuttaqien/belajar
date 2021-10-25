import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct";
import "./Product.css";
import { connect } from "react-redux";
class Product extends Component {
  //   state = {
  //     order: 0,
  //   };
  //   handleCounterChange = (newValue) => {
  //     this.setState({
  //       order: newValue,
  //     });
  //   };
  render() {
    return (
      <Fragment>
        <div className="box-product">
          <div className="card">
            <div className="header-product">
              <h1>Product</h1>
              <div className="logo"></div>
              <div className="troley">
                <div className="count">{this.props.order}</div>
              </div>
            </div>
            <CardProduct
            //   onCounterChange={(newValue) => this.handleCounterChange(newValue)}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};
export default connect(mapStateToProps)(Product);
