import React from 'react';
import './App.css';
import Home from '../src/pages/home.js';
import Error from '../src/pages/error.js';
import Room from '../src/pages/room.js';
import SingleRoom from '../src/pages/singleRoom.js';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';


function App() {
  return (
  <div> 
<NavBar></NavBar>
<Switch>
        <Route exact path='/'component={Home}></Route>
        <Route exact path='/room' component={Room}></Route>
        <Route exact path='/room/:slug' component={SingleRoom}></Route>
        <Route component={Error}></Route>
</Switch>

  </div>
  );
}

export default App;
