import React, { Component } from 'react';
import {  Router, Route, browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import SearchHeader from './Components/SearchHeader/SearchHeader';
import UserList from './Components/UserList/UserList';

import logo from './logo.svg';
import './App.css';

//const history = useRouterHistory(createHashHistory)();

class App extends Component {
  render() {
    return (
   // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
   // </div>

      <BrowserRouter>
        <Route name='container' path='/' component={SearchHeader}>
          
             <Route name='userProfile' path='/:userName/profile'
              component={UserList} />
         </Route>
     </BrowserRouter>


    );
  }
}

export default App;
