import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import LineChart from './LineChart.js';

class Visualizer extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            stocks: [],
            //path: this.props.match.params.symbol,
            hideDet: true,
            hidePort: true,
            name: null,
            companies: [],
            prevClick: null,
            month: null,
            value: null,
            value2: null,
            value3: null,
            display1: false,
            display2: false,
            display3: false,
            display4: false,
            fullDisplay: false
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);

    }
// handle changes for dropdown    
    handleChange1(e){
    this.setState({value: e.target.value});
    if(this.state.display1 === true && this.state.display2 === true && this.state.display3 === true && this.state.display4 === true) {
        //this.setState({display1: false});
        this.setState({fullDisplay: true});
        
    } else {
    this.setState({display1: true});
    //this.setState({fullDisplay: false});
    }
   // console.log(e.target.value);
  }
  
     handleChange2(e){
    this.setState({value2: e.target.value});
    if(this.state.display2 === true && this.state.display1 === true && this.state.display3 === true && this.state.display4 === true) {
        //this.setState({display2: false});
        this.setState({fullDisplay: true});
    } else {
    this.setState({display2: true});
    //this.setState({fullDisplay: false});
    }
   // console.log(e.target.value);
  }
  
     handleChange3(e){
    this.setState({value3: e.target.value});
    if(this.state.display3 === true && this.state.display1 === true && this.state.display2 === true && this.state.display4 === true) {
        //this.setState({display3: false});
        this.setState({fullDisplay: true});
    } else {
    this.setState({display3: true});
    //this.setState({fullDisplay: false});
    }
   // console.log(e.target.value);
  }
  
      handleChange4(e){
    this.setState({month: e.target.value});
    if(this.state.display4 === true && this.state.display1 === true && this.state.display2 === true && this.state.display3 === true) {
        //this.setState({display4: false});
        this.setState({fullDisplay: true});
    } else {
    this.setState({display4: true});
    //this.setState({fullDisplay: false});
    }
    //console.log(e.target.value);
  }

    componentDidMount() {
       axios.get('https://comp4513assignment2-backend.herokuapp.com/api/companies/information')
            .then(response => {
                this.setState({stocks: response.data});
            }) 
            
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
    }
 //render drop down lists   
    render() {

        return(
            <section className="column">
            <div className="select">
                <select onChange={this.handleChange4}>
                    <option value="dropdown">Select Month</option>
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
            </div>
            <div className="select">
                <select onChange={this.handleChange1}>
                <option value="dropdown">Select Company</option>
                    {
                        this.state.stocks.map ((user, index) => {
                        return(
                            <option key={index} value={user.symbol}>Symbol: {user.symbol} Name: {user.name}</option>
                            );
                        })
                    }

                </select>        
            </div>
            <div className="select">
                <select onChange={this.handleChange2}>
                <option value="dropdown">Select Company</option>
                    {
                        this.state.stocks.map ((user, index) => {
                        return(
                            <option key={index} value={user.symbol}>Symbol: {user.symbol} Name: {user.name}</option>
                            );
                        })
                    }

                </select>        
            </div>
            <div className="select">
                <select onChange={this.handleChange3}>
                <option value="dropdown">Select Company</option>
                    {
                        this.state.stocks.map ((user, index) => {
                        return(
                            <option key={index} value={user.symbol}>Symbol: {user.symbol} Name: {user.name}</option>
                            );
                        })
                    }

                </select>        
            </div>

            {this.state.display1 && this.state.display2 && this.state.display3 && this.state.display4 ? 
                <LineChart month={this.state.month} value1={this.state.value} value2={this.state.value2} value3={this.state.value3}></LineChart>
            : null}

            </section>
        );
    }
}

export default Visualizer;