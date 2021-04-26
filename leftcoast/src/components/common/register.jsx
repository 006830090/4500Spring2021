import React from "react";
import loginImg from "../images/logo.svg";
import Joi from 'joi-browser';
import Form from './form'
import "../style/account.css";

export class Register extends Form {
  constructor(props) {
    super(props);
  }

  state = {
    data: { email: "", password: "", name: "", phone: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name"),
    phone: Joi.string()
      .required()
      .min(10)
      .label("Phone")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Sign Up</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("email", "Email")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderInput("name", "Company Name")}
                  {this.renderInput("phone", "Phone Number")}
                  {this.renderButton("Register")}
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
}