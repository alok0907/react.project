import { Slides } from "./slides";
import { Cards } from "./cards";
import { Footer } from "./footer";
import { NavigationBar } from "./navbar";

import About from "./about";
import Contact from "./contact";
import House from "./house";
import Apartment from "./apartment";
import Plot from "./plot";

import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/house" element={<House />} />
            <Route path="/plot" element={<Plot />} />
            <Route path="/apartment" element={<Apartment />} />
          </Routes>
        </BrowserRouter>
        <Slides />
        <Cards />
        <Footer />
      </div>
    );
  }
}
