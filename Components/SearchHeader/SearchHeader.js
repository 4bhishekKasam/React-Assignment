import React, { Component } from 'react';
import UserList  from '../UserList/UserList';

import './SearchHeader.css';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: '',
            userList: [],
            isOpen: false,
            userName:''
            
        };
        this.toggle = this.toggle.bind(this);
        this.getUsers = this.getUsers.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    // componentWillMount(){
    //     this.getUsers();
    //   }
    
      getUsers(e) {
        console.log('get users called='+e.target.value);
        fetch('https://api.github.com/search/users?q='+ e.target.value)
        .then(res => res.json())
        .then(
            userList =>{
                this.setState({userList: userList.items})
                console.log(userList);
            }
        );
      }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary  navbar-inner">
                    <div className="collapse navbar-collapse  navbar-inner navb" >

                        <ul className="navbar-nav  bg-light mr-auto">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle auto" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sort
                               </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Sort by Name (ascending)</a>
                                    <a className="dropdown-item" href="#">Sort by Name (descending)</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Sort by Rank (ascending)</a>
                                    <a className="dropdown-item" href="#">Sort by Rank (descending)</a>                                                                 
                                </div>
                            </li>
                        </ul>

                        <form className="form-inline my-2 my-lg-0 auto" onSubmit={this.getUsers}>
                            <div className="form-group">
                                <input className="form-control mr-sm-2" type="Search" placeholder="Search" 
                                aria-label="Search"  
                                id="userName"                                 
                                onKeyUp={this.getUsers} >                 
                                </input>
                            </div>
                        </form>
                    </div>
                </nav>

                <div > 

                    <UserList userList={this.state.userList}/>
                </div>
            </div>
        );
    }
}

export default SearchHeader;
