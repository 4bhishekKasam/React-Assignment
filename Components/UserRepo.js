import React, { Component } from 'react';

import './UserRepo.css';

class UserRepo extends Component {
    constructor(props) {
        super(props)
        this.state = { rep: [] }
    }

    componentWillMount() {
        
        console.log('check=' + this.props.repoCall)
        //   fetch('https://api.github.com/users/' + this.props.repoCall + '/repos')
        fetch(`https://api.github.com/users/${this.props.repoCall}`)
            .then(res => res.json())
            .then(
            rep => {
                this.setState({
                    rep: rep
                }, () => console.log('here is repo list' + rep));
            }
            );
     
    }

    render() {

        // const reposList = this.state.rep.map((list) => (
        //     <div>
        //         <table className="table table-striped">
        //             <tbody>
        //                 <tr key={list.repos}>
        //                     <td>{list.repos}</td>
        //                     <td>{list.langauge}</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // ));

        return (
            <div className="jumbotron container">
                {/* {repoList}              */}
                <h3>hello</h3>
            </div>
        );
    }
}

export default UserRepo;
