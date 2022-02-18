import React, { Component } from "react";
import { Footer } from "./footer";
import Heading from "./heading";
export default class Login extends Component {
  render() {
    return (
      <>
        <Heading title="Login" />
        {/* <div>
          <form className="form">
            <label>
              Name
              <input
                type="text"
                id="userName"
                placeholder="Enter username"
                onChange={this.props.usernameChange}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                id="password"
                onChange={this.props.passwordChange}
              />
            </label>
            <br />
            <br />

            <input type="submit" value="Submit" />
          </form>
          <p>Username : {this.props.userChange}</p>
          <p>Password : {this.props.passChange}</p>
        </div> */}

        <div className="container-fluid py-5">
          <div className="row row-cols-auto mt-3 justify-content-center">
            <div className="col my-5 pt-4 px-4 px-lg-5 shadow-lg mb-5 bg-light rounded">
              <form>
                <div class="my-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email / Username
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3 pt-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-info my-5 d-flex justify-content-center d-md-table mx-auto" //#    To Center Button in all View Port
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="row my-5">
            <div className="col my-5"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
