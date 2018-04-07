import React, { Component } from 'react';
//import axios from 'axios';
import '../App.css';
import StockList from './StockList.js';
//import stocks from '../data/stocks.json';
import StockSummary from './StockSummary.js';


class SingleUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            path: this.props.match.params.symbol,
            hideDet: true,
            hidePort: true,

            prevClick: null
        };
        
        this.hideDetails = this.hideDetails.bind(this);
        this.hidePortfolio = this.hidePortfolio.bind(this);
    }
/*    componentDidMount() {
        axios.get('https://comp4513assignment2-backend.herokuapp.com/api/average/prices/AMZN')
            .then(response => {
                this.setState({users: response.data.name});
            })
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
*/  
/*        componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.state.path)
            .then(response => {
                this.setState({users: response.data.name});
            })
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
    }*/
    
    hideDetails() {
        this.setState( {prevClick: "Det"});
    }
    
    hidePortfolio() {
        this.setState( { prevClick: "Port"} );
        
    }

    
    render() {
/*        let symbolName = this.state.path;
        let singleStock = stocks.filter(function(stockSymbol) { 
            return stockSymbol.symbol === symbolName;
            
        });*/

        let toDisplay = <StockSummary userPath={this.state.path}></StockSummary>;
        
        if (this.state.prevClick === "Port") { 
            toDisplay = <StockList userPath={this.state.path}></StockList>;
        }
        if (this.state.prevClick === "Det") {
            toDisplay = <StockSummary userPath={this.state.path}></StockSummary>;
        }
        
        return (
            <div> 
                <header className="card-header-title is-centered">
                        <div className="card-image">
                            <figure className="image is 640x480">
                                <img className="SVG-two" src={"/logos/" + this.state.path + ".svg"} alt=""></img>
                            </figure>
                        </div>
                    <p className="title is-5"><strong>{this.state.users}</strong></p>
                </header>
                <div className="tabs is-toggle is-fullwidth">
                    <ul>
                        <li onClick={this.hideDetails}>
                            <a>
                                <span>Stock Summary</span>
                            </a>
                        </li>
                        <li onClick={this.hidePortfolio}>
                            <a>
                                <span>Stock List</span>
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