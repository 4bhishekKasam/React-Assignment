import React, { Component } from 'react';

import './UserList.css';

class UserList extends Component {

    render() {
        const users = this.props.userList.map((user) => (
            <div className="jumbotron container" key={user.login}>
                {user.login}
            </div>
        ));
        return (
            <div className="container-fluid">
                <br />
                {users}
            </div>
        );
      
    }
}

export default UserList;
