import React from "react";

export default function Heading(props) {
  return (
    <>
      <div
        className="container-fluid text-center bg-warning"
        style={{ height: "90px" }}
      >
        <h1 className="py-4 fw-bolder">{props.title}</h1>
      </div>
    </>
  );
}
