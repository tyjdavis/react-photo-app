import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Album extends Component {

  render() {

    return(
      <div className="Album">
      <header className="header">
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo"></a>
          </div>
          <div className="nav-content">
            <span className="nav-title">Album </span>
            <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
              <i className="material-icons">Side</i>
            </a>
          </div>
        </nav>
      </header>

      {/* <ul id="slide-out" className="side-nav">
        <li><div className="userView">
          <div className="background">
            <img src="images/office.jpg"/>
          </div>
          <a href="#!user"><img className="circle" src="images/yuna.jpg"/></a>
          <a href="#!name"><span className="white-text name">John Doe</span></a>
          <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
        </div></li>
        <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div className="divider"></div></li>
        <li><a className="subheader">Subheader</a></li>
        <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
      <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a> */}

      <div className="photos">
      <section className="row">
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/paul-morris.jpg"/>Photo 1</div>
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/paul-morris.jpg"/>Photo 2</div>
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/paul-morris.jpg"/>Photo 3</div>
      </section>
      <section className="row">
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/paul-morris.jpg"/>Photo 4</div>
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/paul-morris.jpg"/>Photo 5</div>
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/paul-morris.jpg"/>Photo 6</div>
      </section>
    </div>
  </div>
      )
    }
}

export default Album
