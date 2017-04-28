import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Home extends Component {


  render() {
    return(
      <div className="home">
      <header className="header">
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo"></a>
            <ul className="right hide-on-med-and-down">
              <li><a>A link</a></li>
              <li><a>A second link</a></li>
              <li><a>A third link</a></li>
            </ul>
          </div>
          <div className="nav-content">
            <span className="nav-title">My Albums</span>
            <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
              <i className="material-icons">Side</i>
            </a>
          </div>
        </nav>
      </header>
      <div className="albums">
      <section className="row">
        <Link className="col s4" to="albums/album1">
          <img className="responsive-img" src="/images/paul-morris.jpg"/>
          Album 1
        </Link>
        <Link className="col s4" to="albums/album2">
          <img className="responsive-img" src="/images/ricardo-gomez-angel.jpg"/>
          Album 2
        </Link>
        <Link className="col s4" to="albums/album3">
          <img className="responsive-img" src="/images/sean-afnan.jpg"/>
          Album 3
        </Link>
      </section>
      <section className="row">
        <Link className="col s4" to="albums/album4">
          <img className="responsive-img" src="/images/toa-heftiba.jpg"/>
          Album 4
        </Link>
        <Link className="col s4" to="albums/album5">
          <img className="responsive-img" src="/images/teddy-kelley.jpg"/>
          Album 5
        </Link>
        <Link className="col s4" to="albums/album6">
          <img className="responsive-img" src="/images/paul-morris.jpg"/>
          Album 6
        </Link>
      </section>
    </div>
  </div>
      )
    }
}

export default Home
