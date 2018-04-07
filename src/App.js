import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderApp from './components/HeaderApp.js';
import UserBrowser from './containers/UserBrowser.js';
import CompanyBrowser from './containers/CompanyBrowser.js';
import PortfolioBrowser from './containers/PortfolioBrowser.js';
import SingleUser from './containers/SingleUser.js';
import Home from './containers/Home.js';
import SingleStock from './containers/SingleStock.js';

/*import logo from './logo.svg';
import './App.css';*/

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
      <div>
        <HeaderApp />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Home/Users" exact component={UserBrowser} />
          <Route path="/Home/Stocks" exact component={CompanyBrowser} />
          <Route path="/Home/About Us" exact component={PortfolioBrowser} />
          <Route path="/Home/Users/:id" exact component={SingleUser} />
          <Route path="/Home/Stocks/:symbol" exact component={SingleStock} />
        </main>
      </div>
    );
  }
}

export default App;
