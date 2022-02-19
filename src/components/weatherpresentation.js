import React from "react";
import PropTypes from "prop-types";
import Heading from "./heading";
import Footer from "./footer";

function WeatherPresentation(props) {
  return (
    <>
      <Heading title="Weather Report" />
      <Footer />
    </>
  );
}

weatherpresentation.propTypes = {};

export default Weatherpresentation;
