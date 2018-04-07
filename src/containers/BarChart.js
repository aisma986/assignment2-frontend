import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
//import axios from 'axios';

class BarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            path: this.props.path,
            close: [],
            month: [],
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        labels: 'Population',
                        data: [
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
                        ],
                        backgroundColor: [
                             'rgba(255, 99, 132, 0.6)',
                             'rgba(54, 162, 235, 0.6)', 
                             'rgba(255, 206, 86, 0.6)', 
                             'rgba(75, 192, 192, 0.6)', 
                             'rgba(153, 102, 255, 0.6)', 
                             'rgba(255, 159, 64, 0.6)', 
                             'rgba(255, 99, 132, 0.6)',
                             'rgba(255, 206, 86, 0.6)', 
                             'rgba(75, 192, 192, 0.6)', 
                             'rgba(153, 102, 255, 0.6)', 
                             'rgba(255, 159, 64, 0.6)', 
                             'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
                
            }
        }
    }
    
/*    componentDidMount() {
        axios.get('https://comp4513assignment2-backend.herokuapp.com/api/average/prices/AMZN')
            .then(response => {
                this.setState({month: response.data});
                //this.setState({close: response.data[0]._id.close});
                
            })
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
    }*/
    
    render() {
        return (
            <div className="card-Content">
                 {console.log(this.props.path)}
                <Bar
            	data={this.state.chartData}
	            width={100}
	            height={50}
                options={{
		        maintainAspectRatio: true
	            }}
/>
            </div>
        )
    }
}

export default BarChart;