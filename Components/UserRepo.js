import React, { Component } from 'react';
import axios from 'axios';

import './UserRepo.css';

class UserRepo extends Component {
    constructor(props) {
        super(props)
        //   this.state ={  repoCall: []}

    }

    componentWillMount() {
        console.log('--------------repo start---')
        console.log('check=' + this.props.repoCall)

        fetch('https://api.github.com/users/' + this.props.repoCall + '/repos')
            .then(res => res.json())
            .then(
                repoCall => {
                    this.setState({
                        repoCall

                    });
                    console.log(this.state.repoCall);
                }
            );
        console.log('----rrr---------end---')
    }


    render() {
        return (
            <div>
                <div class="jumbotron container">
                    <table class="table table-striped">
                        <tbody>
                            <tr >
                                {/* <td>Data Label :{this.state.repoCall.followers}</td>  */}
                            </tr>
                            <tr >
                                <td>Data Label </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default UserRepo;
