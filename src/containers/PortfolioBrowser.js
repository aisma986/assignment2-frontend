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
                            <p className="title is-4 has-text-centered">Jordan Vogel, Yassin Abd Elwahab, Abdul Ismail and Abdullah Binmahfouz</p>
                        </div>
                        </div>
                        <div className="content is-primary">
                            <p className="title is-4 ">Info about the developing team and used links:</p>
                        </div>
                    </div>
                   
                            <p>   We all worked on the Chat, frontend and backend</p>
                            <p>Breadcrumb navigation code found at: <a href="https://codepen.io/Whippy/pen/xLEPdo">https://codepen.io/Whippy/pen/xLEPdo</a></p>
                            <p>Bulma CSS package used for styling found at: <a href="https://bulma.io/">https://bulma.io/</a></p>
                            <p>logo and data files taken from: <a href="https://github.com/rconnolly/comp4513-w2018-assign1.git">https://github.com/rconnolly/comp4513-w2018-assign1.git</a></p>
                            <p>Starting files created using create-react-app in lab 20c</p>
                            <p>Javascript object sorting found at: <a href="https://www.w3schools.com/js/js_array_sort.asp">https://www.w3schools.com/js/js_array_sort.asp</a></p>
                            <p>Images take from: <a href="https://placeimg.com">https://placeimg.com</a> and <a href="https://bulma.io/images/bulma-logo.png">https://bulma.io/images/bulma-logo.png</a></p>
                            <p>Rect Charts tutorial: <a href="https://www.youtube.com/watch?v=Ly-9VTXJlnA">https://www.youtube.com/watch?v=Ly-9VTXJlnA</a></p>
                            <p> Chat Tutorial Reference: /https://www.youtube.com/watch?v=84GXJANOYFw </p>
                            <p> Useful backend links: https://stackoverflow.com/questions/8136652/query-mongodb-on-month-day-year-of-a-datetime </p>
                            <p> Useful backend links: https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue </p>
                            <p> Useful backend links: https://docs.mongodb.com/manual/reference/method/Date/ </p>
                            <p> Useful backend links: https://stackoverflow.com/questions/10942931/converting-string-to-date-in-mongodb</p>
                </div>
              
                
                
                
                
                
                
                
            </article>
            );
    }
}

export default PortfolioBrowser;