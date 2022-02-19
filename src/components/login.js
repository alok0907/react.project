import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Login extends Component {
  render() {
    return (
      <>
        <div className="container-fluid py-5">
          <div className="row row-cols-auto mt-3 justify-content-center">
            <div className="col my-5 pt-4 px-4 px-lg-5 shadow-lg mb-5 bg-light rounded">
              <form>
                <div className="my-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="alok@example.com"
                    onChange={this.props.handleEmail}
                  />
                </div>
                <div className="mb-3 pt-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={this.props.handlePassword}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-info my-5 d-flex justify-content-center d-md-table mx-auto" //#    To Center Button in all View Port
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="row my-5 text-center">
            <div className="col-4 mx-auto my-5 bg-warning">
              <h1>Output :</h1>
              <p>Email : {this.props.email}</p>
              <p>Password: {this.props.password}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
};
