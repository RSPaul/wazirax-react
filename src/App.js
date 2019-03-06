import React, { Component } from 'react';
import NewComponent from './components/home/index';
import P2pComponent from './components/p2p/index';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div >        
      //    <NewComponent images={images}/>       
      // </div>
      <Switch>
        <Route path="/p2p" component={P2pComponent}  />
        <Route path="/" exact component={NewComponent} />
      </Switch>
    );
  }
}

export default App;
