import React, { Component, Fragment } from "react";
import './BlogPosts.css';

class BlogPosts extends Component {

    render() {
        return (
            <Fragment>
                <div>
                    <p>Blog Post</p>
                    <div className="pos">
                        <div className="img-thumb">
                            <img src="https://placeimg.com/200/150/tech" alt="" />
                        </div>
                        <div className="content">
                            <p className="title">Dummy Title</p>
                            <p className="desc">Dummy Body Here</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default BlogPosts;