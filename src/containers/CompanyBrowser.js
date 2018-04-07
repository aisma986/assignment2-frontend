import React, { Component } from 'react';
import stocks from '../data/stocks.json';
import { Link } from 'react-router-dom';
import '../App.css';
class CompanyBrowser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            companies: []
        };
    }
    
    render() {
        return (
            
                <section className="column">
                    <nav className="panel">
                        <h3 className="panel-heading">Stocks</h3>
                        
                        {
                            stocks.map( (stock,ind) => {
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