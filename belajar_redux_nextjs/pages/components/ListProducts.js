import React, { useEffect, Component } from "react";
import { connect } from "react-redux";
import { ambilData } from "../actions";
export class ListProducts extends Component {
  componentDidMount = () => {
    this.props.ambilData();
  };

  renderList = () => {
    return this.props.listProducts.map((product) => {
      return (
        <div key={product.id}>
          <h3>{product.name}</h3>
        </div>
      );
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>List Products</h1>
        {this.renderList()}
      </div>
    );
  }
}
const stateToProps = (state) => {
  return {
    listProducts: state.listProducts,
  };
};
export default connect(stateToProps, { ambilData })(ListProducts);
