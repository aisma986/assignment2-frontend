import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

class BarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            path: this.props.path,
            //close: [],
            //month: [],
            //stocks: [],
            price: null,
            jan: null,
            feb: null,
            mar: null,
            apr: null,
            may: null,
            jun: null,
            jul: null,
            aug: null,
            sep: null,
            oct: null,
            nov: null,
            dec: null,
            sym: null,
            sec: null,
            ind: null,
            add: null,
            
            values: null,
            //chartData: {}
/*            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Prices',
                        data: [
                            300000,//this.state.values[0],
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
                
            }*/
        };
        //this.getChartData = this.getChartData.bind(this);
    }
    componentWillMount(){
 //       this.getCharData();
    }
    

    componentDidMount() {
        axios.get('https://comp4513assignment2-backend.herokuapp.com/api/company/' + this.props.users)
            .then(response => {
                //this.setState({jan: response.data.close});
                
            })
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
       axios.get('https://comp4513assignment2-backend.herokuapp.com/api/average/prices/' +this.props.users)
            .then(response => {
                this.setState({stocks: response.data});
                this.setState({jan: response.data[0].close});
                this.setState({feb: response.data[1].close});
                this.setState({mar: response.data[2].close});
                this.setState({apr: response.data[3].close});
                this.setState({may: response.data[4].close});
                this.setState({jun: response.data[5].close});
                this.setState({jul: response.data[6].close});
                this.setState({aug: response.data[7].close});
                this.setState({sep: response.data[8].close});
                this.setState({oct: response.data[9].close});
                this.setState({nov: response.data[10].close});
                this.setState({dec: response.data[11].close});
                
                
            }) 
            
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
    }
    
/*    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        LegendPosition: 'bottom'
    }*/
    
/*getChartData() {
        let values = [];
        let month = [];
        let nMonth = [];
        for (var i=0; i<this.state.stocks.length; i++) {
            var counter = this.state.stocks[i];
            //console.log(counter.close);
            values[i] = counter.close;
            this.setState({values: counter.close});
            this.setState({price: counter.close});
            
            month[i] = counter._id;
            nMonth[i] = month[i].month;
        } 
        //console.log(values);
       // console.log(month);
       // console.log(nMonth);
        
}*/

    
    render() {

        /*console.log(this.state.stocks[0]);
        console.log(this.state.stocks[0].close);
        console.log(this.state.values);
        console.log(this.state.price);
        console.log(this.state.stocks.length);*/
        console.log(this.props.users);
        
        return (
            <div className="card-Content">
                <Bar
            	data=//{this.state.chartData}
            	{{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Prices',
                        data: [
                            this.state.jan,//300000,
                            this.state.feb,//181045,
                            this.state.mar,//153060,
                            this.state.apr,//106519,
                            this.state.may,//106519,
                            this.state.jun,//105162,
                            this.state.jul,//95072,
                            this.state.aug,//153060,
                            this.state.sep,//106519,
                            this.state.oct,//106519,
                            this.state.nov,//105162,
                            this.state.dec//95072
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
	            /*width={100}
	            height={50}
                options={{
		        maintainAspectRatio: false
	            }}*/
                />
            </div>
        );
    }
}

export default BarChart;