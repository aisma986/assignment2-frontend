import React, { Component } from 'react';
//import stocks from '../data/stocks.json';
import axios from 'axios';
import BarChart from './BarChart.js';

class StockSummary extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            path: this.props.userPath,
            //info: this.props.match.params.symbol,
            stocks: [],
            symbol: null,
            sector: null,
            subIndustry: null,
            address: null,
            
            closePrice: []
        };
    }
    
        componentDidMount() {
       axios.get('https://comp4513assignment2-backend.herokuapp.com/api/company/' + this.state.path)
            .then(response => {
                this.setState({stocks: response.data});
                this.setState({symbol: response.data[0].symbol});
                this.setState({sector: response.data[0].sector});
                this.setState({subIndustry: response.data[0].subindustry});
                this.setState({address: response.data[0].address});
                
            }) 
            
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
    }
    
    render() {
        
/*        let symbolName = this.state.path;
        let singleStock = stocks.filter(function(stockSymbol) { 
            return stockSymbol.symbol === symbolName;
            
        });*/
        //console.log(this.props.userPath);
        //console.log(this.state.stocks);
        //console.log(this.state.symbol);
        return (
                <section className="column">
                    <nav className="panel">
                        
                        <div className="columns">
                            <div className="column">
                                <div className="card" >
                                    <div className="card-image">
                                        {/*<figure className="image is 640x480">
                                            <img className="SVG-two" src={"/logos/" + this.state.path + ".svg"} alt=""></img>
                                        </figure>*/}
                                    </div>
                                    <div className="card-content">
                                        <article className="message is-info">
                                            <div className="message-header">
                                                <p>Company Information</p>
                                            </div>
                                            <div className="message-body">
                                                <div className="card-Content">
                                                    <strong>Symbol: </strong>{this.state.symbol/*singleStock[0].symbol*/}
                                                </div>
                                                <div className="card-Content">
                                                    <strong>Sector: </strong>{this.state.sector/*singleStock[0].sector*/}
                                                </div>
                                                <div className="card-Content">
                                                    <strong>Sub-Industry: </strong>{this.state.subIndustry/*singleStock[0].subIndustry*/}
                                                </div>
                                                <div className="card-Content">
                                                    <strong>Address: </strong>{this.state.address/*singleStock[0].address*/}
                                                </div>
                                                
                                            </div>
                                        </article>
                                        
                                    </div>
                                    <BarChart users={this.props.userPath}></BarChart>
                                </div>
                            </div>
                        </div>
                        <div>
                        
                        </div>
    
                    </nav>
                </section>
            );
    }
}

export default StockSummary;