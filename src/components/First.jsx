import React, { Component } from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Container from "./Container.jsx";

class First extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <>
        <Navbar />
        <Container />
        <Footer />
      </>
    );
  }
}

export default First;
