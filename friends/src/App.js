import React from 'react';
import './App.css';
import Registration from '../src/components/Registration'
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Route exact path = '/' component ={Login} />
      <Route path ='/register' component ={Registration} />
      <PrivateRoute path ='/friends' component ={FriendList} />
    </div>
  );
}

export default App;
