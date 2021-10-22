import React, { Component, Fragment } from "react";
import Header from "../pages/header/Header";
import BlogPosts from "../pages/blog_posts/BlogPosts";
import DetailBlogPost from "../pages/blog_posts/DetailBlogPost";
import Product from "../pages/products/Products";
import LifeCycleComponents from "../pages/life_cycle_components/LifeCycleComponents";
import Youtube from "../pages/youtube/YouTube";
import "./Home.css";
import { BrowserRouter, Route } from "react-router-dom";
class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({
        showComponent: false,
      });
    }, 5000);
  }

  state = {
    post: [],
  };

  //   getPostApi = () => {
  //     axios.get("http://localhost:8181/posts").then((result) => {
  //       this.setState({
  //         post: result.data,
  //       });
  //     });
  //   };

  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         this.setState({
  //           post: json,
  //         });
  //       });
  //     this.getPostApi();
  //   }

  //   handleRemove = (data) => {
  //     axios.delete("http://localhost:8181/posts/" + data).then((result) => {
  //       this.getPostApi();
  //     });
  //   };

  //   handleOnChange = (event) => {
  //     console.log("test", event);
  //   };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="wrapper">
            <div className="header">
              <Header />
            </div>
            <div className="content">
              <Route exact path="/" component={BlogPosts}></Route>
              <Route path="/product" component={Product}></Route>
              <Route path="/detail/:id" component={DetailBlogPost}></Route>
              <Route path="/youtube" component={Youtube}></Route>
              <Route
                path="/lifecyclecomponents"
                component={LifeCycleComponents}
              ></Route>
              {/* <Route path={LifeCycleComponents}></Route> */}
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default Home;
