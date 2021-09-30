import React, { Fragment } from 'react'
import './BlogPosts.css'
export default function BlogPosts(props) {
    return (
        <Fragment>
            <div class="content">
                <img className="image-article" src="https://www.w3schools.com/css/pineapple.jpg" alt="" />
                <h2>
                    {props.data.title}
                </h2>
                <p className="penulis">
                    Ditulis oleh: <a href="google.com">#</a>
                </p>
                <p className="time-article">
                    21 Januari 2021
                </p>
                <div className="body">
                    <p>
                        {props.data.body}
                    </p>
                </div>
                <button onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </Fragment>
    )
}
