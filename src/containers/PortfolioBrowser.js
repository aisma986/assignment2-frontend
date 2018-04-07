import React, { Component } from 'react';

class PortfolioBrowser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            portfolios: []
        };
    }
    
    render() {
        return (
            <article className="section columns">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-640x480">
                            <img src="https://placeimg.com/640/480/animals/sepia" alt="Placeholder"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-content">
                            <p className="title is-4 has-text-centered">Jordan Vogel</p>
                        </div>
                        </div>
                        <div className="content">
                            <p>Breadcrumb navigation code found at: <a href="https://codepen.io/Whippy/pen/xLEPdo">https://codepen.io/Whippy/pen/xLEPdo</a></p>
                            <p>Bulma CSS package used for styling found at: <a href="https://bulma.io/">https://bulma.io/</a></p>
                            <p>logo and data files taken from: <a href="https://github.com/rconnolly/comp4513-w2018-assign1.git">https://github.com/rconnolly/comp4513-w2018-assign1.git</a></p>
                            <p>Starting files created using create-react-app in lab 20c</p>
                            <p>Javascript object sorting found at: <a href="https://www.w3schools.com/js/js_array_sort.asp">https://www.w3schools.com/js/js_array_sort.asp</a></p>
                            <p>Images take from: <a href="https://placeimg.com">https://placeimg.com</a> and <a href="https://bulma.io/images/bulma-logo.png">https://bulma.io/images/bulma-logo.png</a></p>
                        </div>
                    </div>
                </div>
            </article>
            );
    }
}

export default PortfolioBrowser;