import React from "react";
import Col from "react-bootstrap/esm/Col";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import FeaturedProducts from "../FeaturedProducts";
export default class Home extends React.Component {
    render() {
        return (<div className="container"><div className="embed-responsive embed-responsive-16by9">

            <iframe width="auto" height="425" className="embed-responsive-item" src="https://www.youtube.com/embed/s4xnyr2mCuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;
        </div>
            <FeaturedProducts />

        </div>);
    }
}

