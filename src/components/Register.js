import React, { Component } from "react";
import { auth } from '../helpers/auth'
import { Link } from 'react-router-dom';
import RaisedButton from "material-ui/RaisedButton";

  function setErrorMsg(error) {
    return {
      registerError: error.message
    }
  }

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      wrongUsername: 0,
      wrongEmail:0,
      wrongPassword: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //1 - Not used username/email
  //2 - used username/email

  registerSuccessfull(){
    if(this.state.wrongEmail === 1 && this.state.wrongUsername === 1 && this.state.wrongPassword === 1){
      return (
      <div className="formBox">
        <p>Register successful. <Link to = "/">Go to login page.</Link></p>
      </div>
      )
    }
  }

  wrongEmailMessage(){
    if(this.state.wrongEmail === 2){
      return (
      <div className="formMessage">
        <p>Email is already taken</p>
      </div>
      )
    }    

  }

  wrongUsernameMessage(){
    if(this.state.wrongUsername === 2){
      return (
        <div className="formMessage">
          <p>Username is already taken</p>
        </div>
      )
    }
  }

  wrongPasswordMessage(){
   if(this.state.wrongPassword === 2){
      return (
        <div className="formMessage">
          <p>Password must have at least 6 characters. </p>
        </div>
      )
    } 
  }

  handleClick(e, role) {
    localStorage.setItem('pw', this.pw.value);
    localStorage.setItem('user', this.username.value);
    e.preventDefault()
    auth(this.email.value, this.pw.value, this.username.value)
      .catch(e => this.setState(setErrorMsg(e)))
      setTimeout(() => {
        localStorage.removeItem('pw');
        localStorage.removeItem('user');
    }, 1500);
    }
              
  
  render() {
    return (
      <div>
          <div>
            {this.registerSuccessfull()}
            <input placeholder = "username"
              ref={(username) => this.username = username}
            />
            <br />
            {this.wrongUsernameMessage()}
            <br/>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>            <br />
            {this.wrongEmailMessage()}
            <br/>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
            <br/>
            {this.wrongPasswordMessage()}
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event, this.props.role)}
            />       
            <br/>
            <Link to="/">      
            <RaisedButton
              label="Login"
              primary={true}
              style={style}
            />
            </Link>
          </div>
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Register;
