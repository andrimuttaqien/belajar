import React, { Component, Fragment } from "react";
import axios from "axios";
import Post from "./Post";
import AddBlogPost from "./AddBlogPost";
import "./BlogPosts.css";
export default class BlogPosts extends Component {
    state = {
        post: [],
    };
    getData = () => {
        // fetch("http://localhost:8181/posts")
        //     .then((res) => res.json())
        //     .then((json) => {
        //         this.setState({
        //             post: json,
        //         });
        //     });
        axios.get("http://localhost:8181/posts").then((res) => {
            this.setState({
                post: res.data,
            });
        });
    };
    componentDidMount() {
        this.getData();
    }

    handleRemove = (id) => {
        axios.delete("http://localhost:8181/posts/" + id).then(this.getData());
    };
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="box">
                        <div className="header">
                            <h1>Blog Posts</h1>
                        </div>
                        <div className="content">
                            <AddBlogPost />
                            {this.state.post.map((post) => {
                                return (
                                    <Post
                                        id={post.id}
                                        data={post}
                                        remove={(id) => this.handleRemove(id)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
