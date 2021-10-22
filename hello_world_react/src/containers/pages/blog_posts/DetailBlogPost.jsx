import axios from "axios";
import React, { Component, Fragment } from "react";

export default class DetailBlogPost extends Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get("http://localhost:8181/posts/" + id).then((res) => {
      let post = res.data;
      console.log(post);
      this.setState({
        post: {
          title: post.title,
          body: post.body,
        },
      });
    });
  }
  render() {
    return (
      <Fragment>
        <div>
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.body}</p>
        </div>
      </Fragment>
    );
  }
}
