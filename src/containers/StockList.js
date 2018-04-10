import React, { Component } from 'react';
//import userStocks from '../data/userStockPortfolio.json';
//import stocks from '../data/stocks.json';
import '../App.css';
import axios from 'axios';
//import { Link } from 'react-router-dom';


class StockList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            path: this.props.userPath,
            sortSymbol: false,
            sortName: false,
            sortAmount: false,
            prevClick: null,
            addActive: true,
            selectValue: null,
            date: null,
            low: null,
            high: null,
            close: null,
            Month: null
        };        
        this.isActive = this.isActive.bind(this);
        this.addMonth = this.addMonth.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    addMonth() {
        //const currentState = this.state.month;
        this.setState( {Month: "January"} );
    }   
    
    isActive() {
        const currentState = this.state.addActive;
        this.setState( {addActive: !currentState} );
    }

    handleChange(e){
    this.setState({selectValue: e.target.value});
    console.log(e.target.value);
    if(e.target.value !== "dropdown") {
           axios.get('https://comp4513assignment2-backend.herokuapp.com/api/prices/' + e.target.value + '/' + this.state.path)
            .then(response => {
                this.setState({stocks: response.data});
            }) 
            
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
    }
    
  }
  

    
    render() {
        //let tempArray = [];
        console.log(this.state.stocks);
        console.log(this.state.path);
        

        
        
        return (
            <section className="column">
                <div className="select">
                    <select onChange={this.handleChange}>
                        <option value="dropdown">Select dropdown</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>

                    {console.log(this.state.selectValue)}
                    {console.log(this.state.stocks)}
                </div>
            <div className="card">
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                    <th className="pointer" onClick={this.sortSymbols}>Date</th>
                    <th className="pointer" onClick={this.sortNames}>Low</th>
                    {console.log(this.state.sortName)}
                    <th className="pointer" onClick={this.sortAmounts}>High</th>
                    <th className="pointer" onClick={this.sortAmounts}>Open</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.stocks.map ((user, index) => {
                        return(
                            <tr key={index}><td>{user.date}</td><td>{user.low}</td><td>{user.high}</td><td>{user.open}</td></tr>      
                            );
                        })
                    }
                </tbody>
            </table>
            </div>

            </section>
        );
    }
}


export default StockList;