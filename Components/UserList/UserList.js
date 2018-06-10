import React, { Component } from 'react';

import UserRepo from '../UserRepo';
import './UserList.css';

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        const users = this.props.userList.map((user) => (
            <div className="container">
                <div className="jumbotron container" key={user.login}>
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={user.avatar_url}
                                className="rounded-circle" alt="Cinque Terre" />
                        </div>
                        <div className="col-sm-6">
                            <h3>  {user.login}</h3>
                            <p>    Profile URL : {user.html_url} </p>
                            <p>     Score : {user.score}   </p>
                            <p>    Type :  {user.type}</p>
                        </div>
                    </div>
                    <div className="row pull-right">
                        <div className="col-12">
                            <button type="button" className="btn btn-primary btn-outline btn-lg"
                                data-toggle="collapse" data-target="#collapseExample"
                                aria-expanded="false" aria-controls="collapseExample" value={user.login}
                                id="b1" >Details</button>
                        </div>
                    </div>

                </div>
                <div className="collapse" id="collapseExample">
                    <UserRepo repoCall={user.login} />
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

export default UserList;
