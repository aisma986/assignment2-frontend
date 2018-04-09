import React, { Component } from 'react';
import { Router } from 'react-router-dom';

import axios from 'axios';
//import { Link } from 'react-router-dom';

class Form extends Component {
 
 constructor(props) {
    super(props);
    this.state = {userEmail: '', password: '', status: false};

    this.setUserEmail = this.setUserEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setLoginState = this.setLoginState.bind(this);
  }

  setUserEmail(event) {
    this.setState({userEmail: event.target.value});
  }
  
  setPassword(event) {
    this.setState({password: event.target.value});
  }
  
  setLoginState(status){
    this.setState({status: status});
    this.props.status(status);
    console.log("this is child status " + this.state.status);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    var body = {
                 userEmail: this.state.userEmail,
                 password: this.state.password
              }
    
    axios({
        method: 'post',
        url: 'https://comp4513assignment2-backend.herokuapp.com/api/user/login',
        data: body,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //success
        if(response.data.message === "null"){
            console.log("This is an error, or empty");
            this.setLoginState(false);
            
            }
        else{
             console.log(response);
             this.setLoginState(true);
        }
    }.bind(this));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.userEmail} onChange={this.setUserEmail} />
          Password:
          <input type="text" value={this.state.password} onChange={this.setPassword} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  } 

}
export default Form;