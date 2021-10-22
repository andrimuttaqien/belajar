import axios from "axios";
import React, { Component, Fragment } from "react";
import Post from "./Post";
import AddBlogPost from "./AddBlogPost";
import "./BlogPosts.css";
export default class BlogPosts extends Component {
  state = {
    post: [],
  };
  getData = () => {
    axios
      .get("http://localhost:8181/posts?_sort=id&_order=desc")
      .then((res) => {
        this.setState({
          post: res.data,
        });
      });
  };
  componentDidMount = () => {
    this.getData();
  };
  handleRemove = (id) => {
    axios.delete("http://localhost:8181/posts/" + id).then(this.getData());
  };
  //   handleEdit = (data) => {
  //     const formAddBlogPost = data;
  //     console.log(formAddBlogPost);
  //     axios.put("http://localhost:8181/posts/" + id).then((res) => {
  //         console.log(res);
  //     });
  //   };
  handleDetail = (data) => {
    // console.log(data);
    this.props.history.push("/detail/" + data);
  };
  render() {
    return (
      <Fragment>
        <AddBlogPost
          getData={() => this.getData()}
          handleEdit={() => this.handleEdit()}
        />
        {this.state.post.map((post) => {
          return (
            <Post
              id={post.id}
              data={post}
              remove={(id) => this.handleRemove(id)}
              handleEdit={(data) => this.handleEdit(data)}
              detail={(data) => this.handleDetail(data)}
            />
          );
        })}
      </Fragment>
    );
  }
}
