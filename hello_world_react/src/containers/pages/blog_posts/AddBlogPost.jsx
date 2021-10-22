import axios from "axios";
import React, { Component } from "react";
export default class AddBlogPost extends Component {
  state = {
    formAddBlogPost: {
      userId: 1,
      id: [],
      title: [],
      body: [],
    },
  };
  getData = this.props.getData;
  getEdit = this.props.handleEdit;
  // dataEdit = () => {
  // this.setState({
  //     formAddBlogPost: this.props.handleEdit,
  // });
  // };
  // handleEdit = () => {
  //     console.log(this.dataEdit());
  //     axios.put("http://localhost:8181/posts/" + id).then((res) => {
  //         console.log(res);
  //     });
  //     this.setState({
  //         formAddBlogPost: this.dataEdit(),
  //     });
  // };
  handleOnChange = (e) => {
    let formAddBlogPostNew = { ...this.state.formAddBlogPost };
    let timeStamp = new Date().getTime();
    // console.log(timeStamp + "\n");
    formAddBlogPostNew["id"] = timeStamp;
    formAddBlogPostNew[e.target.name] = e.target.value;

    this.setState(
      {
        formAddBlogPost: formAddBlogPostNew,
      },
      () => {
        // console.log("State Value", this.state.formAddBlogPost);
        // console.log(title);
        // console.log(formAddBlogPostNew);
        // console.log(e.target.name);
        // console.log(e.target.value);
        // console.log(this.state.formAddBlogPost);
      }
    );
  };
  handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(this.state.formAddBlogPost);
    this.postDataToApi();
    this.handleReset();
  };
  handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    document.getElementById("body").value = "";
    this.setState({
      formAddBlogPost: [{}],
    });
  };
  postDataToApi = () => {
    axios
      .post(
        "http://localhost:8181/posts?_sort=id&_order=desc",
        this.state.formAddBlogPost
      )
      .then(
        (res) => {
          console.log(res);
          this.getData();
        },
        (err) => {
          console.log("Error Bosku", err);
        }
      );
  };
  render() {
    return (
      <div className="form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={this.handleOnChange}
          value={this.state.formAddBlogPost.title}
        />
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          onChange={this.handleOnChange}
        ></textarea>
        <input type="submit" onClick={this.handleSubmit} value="Submit" />
      </div>
    );
  }
}
