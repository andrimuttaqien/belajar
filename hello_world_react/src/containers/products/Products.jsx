import React, { Component, Fragment } from "react";
import CardProduct from "../card_products/CardProduct";
import './Product.css';

class Product extends Component {
    state = {
        order: 4
    }
    handlePlus = () => {
        // alert("+");
        this.setState({
            order: this.state.order + 1
        })
    }
    handleMinus = () => {
        // alert("-");
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            })
        }
    }
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src=""></img>
                    </div>
                    <div className="troley">
                        <img src=""></img>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>

        )
    };
}
export default Product;
