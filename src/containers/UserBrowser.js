import React, { Component } from 'react';
import UserListItem from '../containers/UserListItem.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserBrowser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            currentUserId: 5,
            users: []
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    componentDidMount() {
        
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({users: response.data.sort((top,bottom) => top.name > bottom.name)});
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
    }
    
    handleSelect(key) {
        this.setState({ currentUserId: key});
    }
    
    render() {
        
        if (!this.state.users || this.state.users.length === 0) {
            return null;
        } else {
        
            let currentID = this.state.currentUserId;
            
        return (
            <article className="section columns">
                <section className="column">
                    <nav className="panel">
                        <h3 className="panel-heading">Users</h3>
                        {
                            this.state.users.map( (user,ind) => {
                            
                                let activeClass = "";
                                if (user.id === currentID) activeClass = "is-active";
                                return (
                                    <Link to={"/Home/Users/" + user.id} key={user.id}><UserListItem key={user.id} index={ind}
                                        identifier={user.id}
                                        active={activeClass}
                                        select={this.handleSelect}
                                        userName={user.name}
                                    >{user.name}</UserListItem></Link>
                                );
                            })
                        }
                    </nav>
                </section>
            </article>
            );
        }
    }
}

export default UserBrowser;