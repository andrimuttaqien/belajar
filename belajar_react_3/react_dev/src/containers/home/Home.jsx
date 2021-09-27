import React, { Component } from "react";
import Youtube from "../../components/YouTube/YouTube";
import Product from "../products/Products";
class Home extends Component {
    render() {
        return (
            <div>
                {/* <h1>Youtube Component</h1>
                <Youtube title="Judul 1" desc="Desc 1" />
                <Youtube desc="Desc 2" />
                <Youtube title="Judul 3" desc="Desc 3" />
                <Youtube desc="Desc 4" />
                <Youtube title="Judul 5" />
                <h1>Counter</h1> */}
                <Product />
            </div>
        )
    };
}
export default Home;