import React, { Component } from 'react';


class UserListItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = { user: props.userActive };
    }

    handleSelectUser = (key) => {
        this.props.select(key);
    }
    
    render() {
        let classes = "panel-block ";
        classes += this.props.active;
        
        return (
            <div className={classes} onClick={() => this.props.select(this.props.identifier)} >
                {this.props.children}
            </div>
        );
    }
}

export default UserListItem;