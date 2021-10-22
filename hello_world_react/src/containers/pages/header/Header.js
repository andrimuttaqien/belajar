import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Fragment>
      <div>
        <Link to="/">Blog Post</Link>
        <Link to="/product">Product</Link>
        <Link to="/youtube">Youtube</Link>
        <Link to="/lifecyclecomponents">Life Cycle Components</Link>
      </div>
    </Fragment>
  );
}
