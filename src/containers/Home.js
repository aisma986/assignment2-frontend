import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            home: []
        };
    }
    render() {
        return (
            <article className="section columns">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-640x480">
                            <img src="https://placeimg.com/640/480/people/grayscale" alt="Placeholder"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-content">
                            <p className="title is-4 has-text-centered">Browse users in the system</p>
                        </div>
                        </div>
                        <Link className="button is-primary is-fullwidth" to="/Home/Users">
                            View Users
                        </Link>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-640x480">
                            <img src="https://placeimg.com/640/480/tech/grayscale" alt="Placeholder"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-content">
                            <p className="title is-4 has-text-centered">Browse the stocks in the system</p>
                        </div>
                        </div>
                        <Link className="button is-primary is-fullwidth" to="/Home/Stocks">
                            View Stocks
                        </Link>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-640x480">
                            <img src="https://placeimg.com/640/480/arch/grayscale" alt="Placeholder"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-content">
                            <p className="title is-4 has-text-centered">Find out more about this system</p>
                        </div>
                        </div>
                        <Link className="button is-primary is-fullwidth" to="/Home/About Us">
                            About Us
                        </Link>
                        
                    </div>
                </div>
            </article>
            );
    }
}

export default Home;