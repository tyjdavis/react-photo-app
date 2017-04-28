import React, { Component } from 'react';

class Header extends Component {


  render() {
    return(
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
      )
    }
}

export default Header
