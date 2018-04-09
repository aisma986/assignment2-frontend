import React, { Component } from 'react';
//import { Redirect, Route } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HeaderApp from './components/HeaderApp.js';
import UserBrowser from './containers/UserBrowser.js';
import CompanyBrowser from './containers/CompanyBrowser.js';
import PortfolioBrowser from './containers/PortfolioBrowser.js';
import SingleUser from './containers/SingleUser.js';
import Home from './containers/Home.js';
//import Form from './containers/Form.js';
import SingleStock from './containers/SingleStock.js';
import axios from 'axios';
  
class App extends Component {
  
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
            this.setLoginState(false);
            }
        //fail
        else{
             console.log(response);
             this.setLoginState(true);
             this.setState({user:response.data});
        }
    }.bind(this));
  }

  render() {
   if (!this.state.status){
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
    else {
   
    return (
      <div>
        <HeaderApp />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          
                 
          <Route exact path="/Home/Users"  render={()=>(  <UserBrowser userData={this.state.user}/>)}/>
         
          <Route path="/Home/Stocks" exact component={CompanyBrowser} />
          <Route path="/Home/About Us" exact component={PortfolioBrowser} />
          <Route path="/Home/Users/:id" exact component={SingleUser} />
          <Route path="/Home/Stocks/:symbol" exact component={SingleStock} />
        </main>
      </div>
    );
    }
  
}}

export default App;
