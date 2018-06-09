import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './UserList.css';
const _baseUrl = "https://api.github.com/users/";

class UserList extends Component {


    renderStat(stat) {
        return (
          
            <div class="jumbotron container">
                <table class="table table-striped">
                    <tbody>
                        <tr key={stat.name}>
                            <td>Data Label {stat.name} : {stat.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
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
                            <p>Type :  {user.type}</p>
                        </div>
                    </div>
                    <div className="row pull-right">
                        <div className="col-12">
                            <button type="button" className="btn btn-primary btn-outline btn-lg"
                                data-toggle="collapse" data-target="#collapseExample"
                                aria-expanded="false" aria-controls="collapseExample">Details</button>
                        </div>
                    </div>
                </div>

                <div className="collapse" id="collapseExample">
                    <div className="jumbotron container">
                        <table class="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Data Label :</td>
                                </tr>
                                <tr>
                                    <td>Data Label :</td>
                                </tr>
                                <tr>
                                    <td>Data Label :</td>
                                </tr>
                            </tbody>
                        </table>
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
