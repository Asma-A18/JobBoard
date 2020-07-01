import React, { Component } from "react";
import { login } from "../js/actions/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };
  changeHandle = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  };
  render() {
    return this.props.isLoading ? (
      <h1>You're being redirected to you account...</h1>
    ) : localStorage.getItem("token") ? (
      <Redirect to="/profileCompany" />
    ) : (
      <div>
        <form>
          <div className="form-group col-md-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              onChange={this.changeHandle}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.changeHandle}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const msp = (state) => ({
  isLoading: state.authReducer.isLoading,
  
});
export default connect(msp, { login })(Signin);
