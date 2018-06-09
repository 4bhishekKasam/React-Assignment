import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import SearchHeader from './Components/SearchHeader/SearchHeader';
import UserList from './Components/UserList/UserList';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route name='container' path='/' component={SearchHeader}>
     
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
