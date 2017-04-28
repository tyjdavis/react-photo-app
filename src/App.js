import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Album1 from './Album1';
import Album2 from './Album2';
import Album3 from './Album3';
import Album4 from './Album4';
import Album5 from './Album5';
import Album6 from './Album6';


import Aside from './Aside';


class App extends Component {




  render() {
    return (
      <Router>
        <section className="">
            <Route exact path="/" component={Home}/>
            <Route exact path="/album1" component={Album1}/>
            <Route exact path="/album2" component={Album2}/>
            <Route exact path="/album3" component={Album3}/>
            <Route exact path="/album4" component={Album4}/>
            <Route exact path="/album5" component={Album5}/>
            <Route exact path="/album6" component={Album6}/>

            {/* <Route path="/albums/:album?" component={Album}/>
            <Route path="/albums/:album?" component={Album}/>
            <Route path="/albums/:album?" component={Album}/> */}
        </section>
      </Router>
    );
  }
}

export default App;
