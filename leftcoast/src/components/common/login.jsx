import React from "react";
import loginImg from "../images/login.svg";
import Joi from 'joi-browser';
import Form from './form'
import "../style/account.css";


export class Login extends Form {
  
  constructor(props) {
    super(props);
  }

  state = {
      data: { email: '', password: ''},
      errors: {}
  };

  schema = {
      email: Joi.string().required().label("Email"),
      password: Joi.string().required().label("Password")   
  }

  doSubmit = () => (
      //call the server
      console.log("Submitted")
  );


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Sign In</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <form onSubmit={this.handleSubmit}>
                  {this.renderInput('email', 'Email')}
                  {this.renderInput('password', 'Password', "password")}                  
                  {this.renderButton('Login')}   
              </form>
            </div>
           
          </div>
        </div>

      </div>
    );
  }
}