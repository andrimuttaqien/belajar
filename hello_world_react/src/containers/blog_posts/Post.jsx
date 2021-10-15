import React from "react";
export default function Post(props) {
    return (
        <div class="content" key={props.data.id}>
            <img
                className="image-article"
                src="https://placeimg.com/150/75/tech"
                alt=""
            />
            <h2>{props.data.titile}</h2>
            <p className="penulis">
                Ditulis oleh: <a href="google.com">#</a>
            </p>
            <p className="time-article">21 Januari 2021</p>
            <div className="body">
                <p>{props.data.body}</p>
            </div>
            <button onClick={() => props.remove(props.data.id)}>
                Remove ({props.data.id})
            </button>
        </div>
    );
}
