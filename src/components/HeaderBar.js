import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addActive: true,
        };
        this.isActive = this.isActive.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }    
    
    isActive() {
        const currentState = this.state.addActive;
        this.setState( {addActive: !currentState} );
    }
    
    refreshPage(){
      window.location.reload();  
    }
    render() {
    return (
        <div>
        <div>
        <a to="" refresh="true" className="button is-pulled-right" onClick={this.refreshPage}> Logout </a>
        </div>
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
            <a className="navbar-item" href="">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
            </a>
                <div className={this.state.addActive ? "navbar-burger burger": "navbar-burger burger is-active"} data-target="navbarExampleTransparentExample" onClick={this.isActive}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navbarExampleTransparentExample" className={this.state.addActive ? "navbar-menu": "navbar-menu is-active"} onClick={this.isActive}>
                <div className="navbar-end">
                    <div className="navbar-item button has-dropdown is-hoverable">
                        <NavLink className="navbar-link" to={ {pathname: "/Home"}}>Menu</NavLink>
                        
                        <div className="navbar-dropdown is-boxed is-active">
                            <NavLink className="navbar-item" to={ {pathname: "/Home"}}>Home</NavLink>
                            <NavLink className="navbar-item" to={ {pathname: "/Home/Users"}}>Users</NavLink>
                            <NavLink className="navbar-item" to={ {pathname: "/Home/Stocks"}}>Stocks</NavLink>
                            <NavLink className="navbar-item" to={ {pathname: "/Home/Chat"}}>Chat</NavLink>
                            <NavLink className="navbar-item" to={ {pathname: "/Home/About Us"}}>About Us</NavLink>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </nav>
        {/*<a to="" refresh="true" className="button is-pulled-right" onClick={this.refreshPage}> Logout </a>*/}
        </div>
    );
}
}
export default HeaderBar;