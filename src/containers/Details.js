import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            addresses: [],
            geoLoc: [],
            companies: [],
            hideAdd: false,
            hideCom: false
        };
        this.hideAddress = this.hideAddress.bind(this);
        this.hideCompany = this.hideCompany.bind(this);
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.userPath)
            .then(response => {
                /*this.setState({users: response.data});
                this.setState({addresses: response.data.address});
                this.setState({geoLoc: response.data.address.geo});
                this.setState({companies: response.data.company});
                */
            })
            .catch(function (error) {
                alert('Error with api call error=' + error);
            });
    }
    
    hideAddress() {
        this.setState( { hideAdd: !this.state.hideAdd } );
    }
    
    hideCompany() {
        this.setState( { hideCom: !this.state.hideCom } );
    }
    
    render() {
        return (
            <div className="card">
 
                
                <article className="message is-dark">
                    <div className="message-header" >
                        <p>User Details</p>
                    </div>
                    <div className="message-body">
                        <div className="card-Content">
                            <strong>ID: </strong>{this.state.users.id}
                        </div>

                        <div className="card-Content">
                            <strong>Username: </strong>{this.state.users.username}
                        </div>
                        <div className="card-Content">
                            <strong>Email: </strong>{this.state.users.email}
                        </div>
                        <div className="card-Content">
                            <strong>Phone: </strong>{this.state.users.phone}
                        </div>
                        <div className="card-Content">
                            <strong>Website: </strong>{this.state.users.website}
                        </div> <br></br> 

                
                
                <article className="message is-info">
                    <div className="message-header" onClick={this.hideAddress}>
                        <p>Address Information</p>
                            <button className="delete" aria-label="delete"></button>
                    </div>
                    {!this.state.hideAdd ? 
                    <div className="message-body">
                        <div className="card-Content">
                            <strong>Street: </strong>{this.state.addresses.street}
                        </div>
                        <div className="card-Content">
                            <strong>Suite: </strong>{this.state.addresses.suite}
                        </div>
                        <div className="card-Content">
                            <strong>City: </strong>{this.state.addresses.city}
                        </div>
                        <div className="card-Content">
                            <strong>Zipcode: </strong>{this.state.addresses.zipcode}
                        </div>
                        <div className="card-Content">
                            <strong>Latitude: </strong>{this.state.geoLoc.lat}
                        </div>
                        <div className="card-Content">
                            <strong>Longtitude: </strong>{this.state.geoLoc.lng}
                        </div>   
                    </div> : null}
                </article>
                
                
                
                <article className="message is-info">
                    <div className="message-header" onClick={this.hideCompany}>
                        <p>Company Information</p>
                            <button className="delete" aria-label="delete"></button>
                    </div>
                    {!this.state.hideCom ?
                    <div className="message-body">
                        <div className="card-Content">
                            <strong>Name: </strong>{this.state.companies.name}
                        </div>
                        <div className="card-Content">
                            <strong>Catchphrase: </strong>{this.state.companies.catchPhrase}
                        </div>
                        <div className="card-Content">
                            <strong>Business: </strong>{this.state.companies.bs}
                        </div>
                    </div> : null}
                </article>
                
                
                </div> 
                </article>
            </div>
        );
    }
}


export default Details;