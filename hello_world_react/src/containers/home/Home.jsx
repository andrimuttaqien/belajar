import React, { Component, Fragment } from "react";
import BlogPosts from "../blog_posts/BlogPosts";
// import LifeCycleComponents from "../life_cycle_components/LifeCycleComponents";
// import Youtube from "../../components/YouTube/YouTube";
// import Product from "../products/Products";
class Home extends Component {
    // state = {
    //     showComponent: true
    // }
    // componentDidMount() {
    //     console.log('componentDidMount')
    //     setTimeout(() => {
    //         this.setState({
    //             showComponent: false
    //         })
    //     }, 5000);
    // }
    // state = {
    //     post: [],
    // };
    // getPostApi = () => {
    //     axios.get("http://localhost:8181/posts").then((result) => {
    //         this.setState({
    //             post: result.data,
    //         });
    //     });
    // };
    // componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => {
    //         this.setState({
    //             post: json
    //         })
    //     })
    // this.getPostApi();
    // }
    // handleRemove = (data) => {
    //     axios.delete("http://localhost:8181/posts/" + data).then((result) => {
    //         this.getPostApi();
    //     });
    // };
    // handleOnChange = (event) => {
    //     console.log("test", event);
    // };
    render() {
        return (
            <Fragment>
                {/* <Header /> */}
                <BlogPosts />
                {/* <h1>Youtube Component</h1>
                <Youtube title="Judul 1" desc="Desc 1" />
                <Youtube desc="Desc 2" />
                <Youtube title="Judul 3" desc="Desc 3" />
                <Youtube desc="Desc 4" />
                <Youtube title="Judul 5" />
                <h1>Counter</h1> */}
                {/* {
                    this.state.showComponent
                        ?
                        <LifeCycleComponents />
                        :
                        null
                } */}
            </Fragment>
        );
    }
}
export default Home;
