import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home';
import Pictures from './Pictures';


class App extends Component {


  render() {
    return (
      <Router forceRefresh={true}>
        <section className="">
            <Route exact path="/" component={Home}/>
            <Route exact path="/albums/:pictures?" component={Pictures}/>
        </section>
      </Router>
    );
  }
}

export default App;
