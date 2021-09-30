import React, { Component, Fragment } from "react";
import BlogPosts from "../blog_posts/BlogPosts";
import '../blog_posts/BlogPosts.css';
import axios from 'axios'
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
    state = {
        post: []
    }
    getPostApi = () => {
        axios.get('http://localhost:3004/posts')
            .then(result => {
                this.setState({
                    post: result.data
                })
            })
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })
        this.getPostApi()
    }
    handleRemove = (data) => {
        axios.delete('http://localhost:3004/posts/' + data)
            .then((result) => {
                this.getPostApi()
            })
    }
    handleOnChange = (event) => {
        console.log('test', event)
    }
    render() {
        return (
            <Fragment>
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
                <div className="container">
                    <div className="box">
                        <div className="header">
                            <h1>Blog Post</h1>
                        </div>
                        <div className="content">
                            <div className="form">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" onChange={this.handleOnChange} />
                                <label htmlFor="body">Body</label>
                                <textarea name="body" id="body" cols="30" rows="10" onChange={this.handleOnChange}></textarea>
                                <input type="submit" value="Submit" />
                            </div>
                            {
                                this.state.post.map(post => {
                                    return (
                                        <BlogPosts
                                            key={post.id}
                                            data={post}
                                            remove={this.handleRemove}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    };
}
export default Home;