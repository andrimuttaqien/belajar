import React, { Component } from "react";
import BlogPosts from "../blog_posts/BlogPosts";
// import LifeCycleComponents from "../life_cycle_components/LifeCycleComponents";
// import Youtube from "../../components/YouTube/YouTube";
// import Product from "../products/Products";
class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount() {
        // console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 5000);
    }
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


                {/* {
                    this.state.showComponent
                        ?
                        <LifeCycleComponents />
                        :
                        null


                } */}
                <div className="header">Blog Post</div>
                <BlogPosts />

            </div>
        )
    };
}
export default Home;