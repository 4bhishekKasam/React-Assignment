import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './UserList.css';
const _baseUrl = "https://api.github.com/users/";

class UserList extends Component {

    render() {
        const users = this.props.userList.map((user) => (
            <div className="container">
                <div className="jumbotron container" key={user.login}>

                    <div className="row">
                        <div className="col-sm-2">
                            <img src={user.avatar_url}
                                className="rounded-circle" alt="Cinque Terre" />
                        </div>
                        <div className="col-sm-6">
                            <h4>  {user.login}</h4>
                            <p>
                                Profile URL : {user.html_url} <br />
                                UserName : {user.followers}
                            </p>

                        </div>
                    </div>
                </div>
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

UserList.propTypes = {
    user: PropTypes.shape({
        bio: PropTypes.string,
        followers: PropTypes.number,
        following: PropTypes.number
    })
};

export default UserList;
