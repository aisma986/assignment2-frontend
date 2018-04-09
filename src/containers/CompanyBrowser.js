import React, { Component } from 'react';
//import stocks from '../data/stocks.json';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CompanyBrowser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            companies: []
        };
    }
    
        componentDidMount() {
        axios.get('https://comp4513assignment2-backend.herokuapp.com/api/companies/information')
            .then(response => {
                this.setState({companies: response.data});
            })
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
        }
    
    render() {
        //console.log(this.state.params.match.symbol);
        //console.log(this.state.companies);
        return (
                
                <section className="column">
                    <nav className="panel">
                        <h3 className="panel-heading">Stocks</h3>
                        
                        {
                            this.state.companies.map( (stock,ind) => {
                                return (
                                
                                <div className="columns" key={stock.symbol}>
                                <div className="column is-narrow">
                                <div className="card" >
                                    <div className="card-image">
                                        <figure className="image">
                                            <img className="SVG" src={"/logos/" + stock.symbol + ".svg"} alt=""></img>
                                        </figure>
                                        
                                    </div>
                                    <div className="card-content">
                                        <Link className="button is-primary is-fullwidth is-size-7" to={"/Home/Stocks/" + stock.symbol}>{stock.name}</Link>
                                    </div>
                                </div>
                                </div>
                                </div>
                                );
                            })
                        }
                        
                    </nav>
                </section>
            
            );
    }
}

export default CompanyBrowser;