import React, { Component } from 'react';
import userStocks from '../data/userStockPortfolio.json'
import stocks from '../data/stocks.json'
import '../App.css';
import { Link } from 'react-router-dom';


class Portfolio extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            sortSymbol: false,
            sortName: false,
            sortAmount: false,
            prevClick: null
        };        

        this.sortSymbols = this.sortSymbols.bind(this);
        this.sortNames = this.sortNames.bind(this);
        this.sortAmounts = this.sortAmounts.bind(this);
    }
    
    sortSymbols() {
        this.setState( { sortSymbol: !this.state.sortSymbol } );
        this.setState( { prevClick: "symbol" } );
    }
    
    sortNames() {
        this.setState( { sortName: !this.state.sortName } );
        this.setState( { prevClick: "name" } );
    }
    
    sortAmounts() {
        this.setState( { sortAmount: !this.state.sortAmount } );
        this.setState( { prevClick: "amount" } );
    }
    
    render() {
        
        let currentId = parseInt(this.props.userPath, 10);
        
        let singlePortfolio = userStocks.filter(function(id) { 
            return id.userId === currentId
            
        });

        let tempArray = [];

        for (let j = 0; j < stocks.length; j++) {
            for ( let i = 0; i < singlePortfolio.length; i++){
                if (singlePortfolio[i].symbol === stocks[j].symbol) {
                    let tempObj = {symbol: singlePortfolio[i].symbol,
                                amount: singlePortfolio[i].amount,
                                name: stocks[j].name};
                    tempArray.push(tempObj);
                    tempObj = null;
                }
            }
        }

        tempArray.sort(function(top, bottom){
            var prev = top.name.toLowerCase();
            var next = bottom.name.toLowerCase();
            if (prev < next) {
                return -1;
            }
            if (prev > next) {
                return 1;
            }
                return 0;
        });
        
        if (this.state.sortName === true && this.state.prevClick === "name") {
            tempArray.sort(function(bottom, top){
                var prev = top.name.toLowerCase();
                var next = bottom.name.toLowerCase();
                if (prev < next) {
                    return -1;
                }
                if (prev > next) {
                    return 1;
                }
                 return 0;
            });    
        }

        if (this.state.sortSymbol === true && this.state.prevClick === "symbol") {
            tempArray.sort(function(bottom, top){
                var prev = top.symbol.toLowerCase();
                var next = bottom.symbol.toLowerCase();
                if (prev < next) {
                    return -1;
                }
                if (prev > next) {
                return 1;
                }
                return 0;
            });    
        }
        if (this.state.sortSymbol === false && this.state.prevClick === "symbol") {
            tempArray.sort(function(top, bottom){
                var prev = top.symbol.toLowerCase();
                var next = bottom.symbol.toLowerCase();
                if (prev < next) {
                    return -1;
                }
                if (prev > next) {
                return 1;
                }
                return 0;
            });    
        }
        if (this.state.sortAmount === true && this.state.prevClick === "amount") {
            tempArray.sort(function(bottom, top){
                return top.amount - bottom.amount;
            });
        }
        if (this.state.sortAmount === false && this.state.prevClick === "amount") {
            tempArray.sort(function(top, bottom){
                return top.amount - bottom.amount;
            });   
        }
        
        return (
            <div className="card">
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                    <th className="pointer" onClick={this.sortSymbols}>Symbol</th>
                    <th className="pointer" onClick={this.sortNames}>Name</th>
                    {console.log(this.state.sortName)}
                    <th className="pointer" onClick={this.sortAmounts}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tempArray.map ((user, index) => {
                        return(
                            <tr key={index}><td><Link to={"/Home/Stocks/" + user.symbol}>{user.symbol}</Link></td><td><Link to={"/Home/Stocks/" + user.symbol}>{user.name}</Link></td><td>{user.amount}</td></tr>      
                            );
                        })
                    }
                </tbody>
            </table>
            </div>
        );
    }
}


export default Portfolio;