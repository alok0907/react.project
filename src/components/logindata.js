//#-----------------	Container Component		------------

import React from "react";
import { Login } from "./login";

export class Logindata extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      userChange: "",
      passChange: "",
    };
  }
  //#----------	 Handles Username Input		----------

  handleUsernameChange(event) {
    this.setState(() => (this.state.userChange = event.target.value));
  }

  //#----------	 Handles Password Input		----------

  handlePasswordChange(event) {
    this.setState(() => (this.state.passChange = event.target.value));
  }

  //#----------	 Handles the submit		----------

  //   handleSubmit(event) {
  //     alert(
  //       "Username : " +
  //         this.state.userChange +
  //         "\nPassword : " +
  //         this.state.passChange
  //     );
  //   }

  render() {
    return (
      <div className="container">
        <Login
          usernameChange={this.handleUsernameChange}
          userChange={this.state.userChange}
          passwordChange={this.handlePasswordChange}
          passChange={this.state.passChange}
        />
      </div>
    );
  }
}
