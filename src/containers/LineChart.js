import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

class LineChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            path: this.props.path,
            value: this.props.value1,
            value2: this.props.value2,
            value3: this.props.value3,
            prices1: [],
            prices2: [],
            prices3: [],
            days1:[],
            days2: [],
            days3: [],
            month: this.props.month,
            //close: [],
            //month: [],
            //stocks: [],
            array1: [],
            array2: [],
            array3: [],
            
            values: null,
            //chartData: {}
        };
        //this.getChartData = this.getChartData.bind(this);
    }

    componentDidMount() {
        axios.get('https://comp4513assignment2-backend.herokuapp.com/api/prices/' + this.state.month + '/' + this.state.value)
            .then(response => {
                this.setState({array1: response.data});
                //console.log(this.state.month);
                
            })
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
            
         axios.get('https://comp4513assignment2-backend.herokuapp.com/api/prices/' + this.state.month + '/' + this.state.value2)
            .then(response => {
                this.setState({array2: response.data});
            }) 
            
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
            
         axios.get('https://comp4513assignment2-backend.herokuapp.com/api/prices/' + this.state.month + '/' + this.state.value3)
            .then(response => {
                this.setState({array3: response.data});
            }) 
            
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
            //console.log(this.state.array3);
    }

    
    


    
    render() {

        //console.log(this.state.array1);
        console.log(this.state.array2);
        //console.log(this.state.array3);
        //let prices = [];
        let prices1 = [];
        let days1 = [];
        let prices2 = [];
        let days2 = [];
        let prices3 = [];
        let days3 = [];
        let length = this.state.array1.length;
        let length2 = this.state.array2.length;
        let length3 = this.state.array3.length;
        
        console.log(length);
        for(let i = 0; i < length; i++) {
            prices1.push(this.state.array1[i].close);
            days1.push(this.state.array1[i].date);
            
            this.state.prices1.push(this.state.array1[i].close);
            this.state.days1.push(this.state.array1[i].date);
        }
        //this.setState({prices1: prices1});
        console.log(prices1);
        for(let i = 0; i < length2; i++) {
            prices2.push(this.state.array2[i].close);
            days2.push(this.state.array2[i].date);            
            this.state.prices2.push(this.state.array2[i].close);
            this.state.days2.push(this.state.array2[i].date);
 
        }
        for(let i = 0; i < length3; i++) {
            prices3.push(this.state.array3[i].close);
            days3.push(this.state.array3[i].date);            
            this.state.prices3.push(this.state.array3[i].close);
            this.state.days3.push(this.state.array3[i].date);

        }
        console.log(this.state.prices1);
        //console.log(this.state.days1);
        return (
            <div className="card-Content">
                <Line
            	data=//{this.state.chartData}
            	{{
                labels: days1, //['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: this.props.value1,
                        data: prices1/*[
                            300000,
                            181045,
                            153060,
                            106519,
                            106519,
                            105162,
                            95072,
                            153060,
                            106519,
                            106519,
                            105162,
                            95072
                        ]*/,
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                        fill: false
                        
                    },
                   {
                        label: this.props.value2,
                        data: prices2/*[
                            100000,
                            181045,
                            153060,
                            106519,
                            106519,
                            105162,
                            95072,
                            153060,
                            106519,
                            106519,
                            105162,
                            95072
                        ]*/,
                        backgroundColor: 'rgba(100, 99, 132, 0.6)',
                        borderColor: 'rgba(100, 99, 132, 0.6)',
                        fill: false
                        
                    }, 
                   {
                        label: this.props.value3,
                        data: prices3/*[
                            200000,
                            181045,
                            153060,
                            106519,
                            106519,
                            105162,
                            95072,
                            153060,
                            106519,
                            106519,
                            105162,
                            95072
                        ]*/,
                        backgroundColor: 'rgba(54, 99, 132, 0.6)',
                        borderColor: 'rgba(54, 99, 132, 0.6)',
                        fill:false
                        
                    }                    
                ]
                
            }}
            	options={{
            	    title:{
            	        display:true,
            	        //display:this.props.displayLegend,
            	        text:'Closing Price',
            	        fontSize: 25
            	        
            	    },
            	legend: {
            	    display:true,
            	    position:'bottom',
            	    
            	    //display:this.props.displayLegend,
            	    //position:this.props.legendPosition
            	},
            	//maintainAspectRatio: false
            	}}
	            width={100}
	            height={75}
                options={{
		        maintainAspectRatio: true
	            }}
                />
            </div>
        );
    }
}

export default LineChart;