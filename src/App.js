import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Album from './Album';
import Aside from './Aside';


class App extends Component {




  render() {
    return (
      <Router>
        <section className="">
            <Route exact path="/" component={Home}/>
            <Route path="/albums/:album?" component={Album}/>
        </section>
      </Router>
    );
  }
}

export default App;
