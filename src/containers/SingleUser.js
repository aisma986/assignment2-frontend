import React, { Component } from 'react';
import axios from 'axios';
import Details from './Details.js';
import Portfolio from './Portfolio.js';

class SingleUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            path: this.props.match.params.id,
            hideDet: true,
            hidePort: true,
            prevClick: null
        };
        
        this.hideDetails = this.hideDetails.bind(this);
        this.hidePortfolio = this.hidePortfolio.bind(this);
    }
    
        componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.state.path)
            .then(response => {
                this.setState({users: response.data.name});
            })
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
    }
    
    hideDetails() {
        this.setState( {prevClick: "Det"});
    }
    
    hidePortfolio() {
        this.setState( { prevClick: "Port"} );
        
    }

    
    render() {

        let toDisplay = <Details userPath={this.state.path}></Details>;
        
        if (this.state.prevClick === "Port") { 
            toDisplay = <Portfolio userPath={this.state.path}></Portfolio>;
        }
        if (this.state.prevClick === "Det") {
            toDisplay = <Details userPath={this.state.path}></Details>;
        }
        
        return (
            <div> 
                <header className="card-header-title is-centered">
                    <p className="title is-5"><strong>{this.state.users}</strong></p>
                </header>
                <div className="tabs is-toggle is-fullwidth">
                    <ul>
                        <li onClick={this.hideDetails}>
                            <a>
                                <span>Details</span>
                            </a>
                        </li>
                        <li onClick={this.hidePortfolio}>
                            <a>
                                <span>Portfolio</span>
                            </a>
                        </li>
                    </ul>
                </div>
                { toDisplay }
            </div>
        );        
    }
}

export default SingleUser;