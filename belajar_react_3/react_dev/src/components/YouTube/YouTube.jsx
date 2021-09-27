import React from "react";
import './YouTube.css';
import image from './images/placeimg_640_480_arch.jpg';
const YouTube = (props) => {
    return (
        <div className="youtube-wrapper">
            <p className="img-thumb">
                <img src={image} />
                <p className="time"></p>
            </p>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}
YouTube.defaultProps = {
    title: "Default Title",
    desc: "Default Props"
}
export default YouTube;