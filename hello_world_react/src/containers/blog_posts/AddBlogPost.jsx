import React, { Component } from "react";
export default class AddBlogPost extends Component {
    state = {
        formAddBlogPost: {
            userId: [],
            id: [],
            title: [],
            body: [],
        },
    };
    handleOnChange = (e) => {
        let title = e.target.value;
        // console.log(title);
        // console.log("State Value", this.state.formAddBlogPost);
        let formAddBlogPostNew = { ...this.state.formAddBlogPost };
        console.log(formAddBlogPostNew);
        this.setState({});
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
                />
                <label htmlFor="body">Body</label>
                <textarea
                    name="body"
                    id="body"
                    cols="30"
                    rows="10"
                    onChange={this.handleOnChange}
                ></textarea>
                <input type="submit" value="Submit" />
            </div>
        );
    }
}
