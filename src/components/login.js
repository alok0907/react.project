import React, { Component } from "react";
import Heading from "./heading";
import { Footer } from "./footer";
import LoginPresentation from "./loginpresentation";

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail(e) {
    this.setState(() => (this.state.email = e.target.value));
  }

  handlePassword(e) {
    this.setState(() => (this.state.password = e.target.value));
  }

  render() {
    return (
      <>
        <Heading title="Login" />
        <LoginPresentation
          handleEmail={this.handleEmail}
          handlePassword={this.handlePassword}
          email={this.state.email}
          password={this.state.password}
        />
        {console.log(this.state.email, this.state.password)}
        <Footer />
      </>
    );
  }
}
