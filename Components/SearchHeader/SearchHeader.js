import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import './SearchHeader.css';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: '',
            userList: [],
            isOpen: false
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
    
      getUsers() {
        fetch('https://api.github.com/search/users?q=${this.state.userName}')
        .then(res => res.json())
        .then(
            userList =>{
                this.setState({userList: userList})
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
                                aria-label="Search"  ref="textInput"  
                                value={this.state.userName} >

                                </input>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default SearchHeader;
