// import { NavigationBar } from "./navbar";
import { Slides } from "./slides";
import { Info } from "./info";
import { Products } from "./products";
import { Footer } from "./footer";

import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Slides />
        <Info />
        <Products />
        <Footer />
      </div>
    );
  }
}
