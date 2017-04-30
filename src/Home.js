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
            <span className="nav-title">Home - My Albums</span>
          </div>
        </nav>
      </header>

      <div className="albums">
      <section className="row">
        <Link className="col s4" to="albums/album1">
          <img className="responsive-img z-depth-5" src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/>
          <p>
            We Work
          </p>
        </Link>
        <Link className="col s4" to="albums/album2">
          <img className="responsive-img z-depth-5" src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/>
          <p>
            Cabin
          </p>
        </Link>
        <Link className="col s4" to="albums/album3">
          <img className="responsive-img z-depth-5" src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?dpr=1&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop=&bg="/>
          <p>
            Travel
          </p>
        </Link>
      </section>
      <section className="row">
        <Link className="col s4" to="albums/album4">
          <img className="responsive-img z-depth-5" src="https://images.unsplash.com/photo-1482282481341-0e69de5de39b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/>
          <p>
            Urban
          </p>
        </Link>
        <Link className="col s4" to="albums/album5">
          <img className="responsive-img z-depth-5" src="https://images.unsplash.com/photo-1485120252639-4955174c75d6?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/>
          <p>
            Tattoos
          </p>
        </Link>
        <Link className="col s4" to="albums/album6">
          <img className="responsive-img z-depth-5" src="https://images.unsplash.com/photo-1492759713672-5e5940bd5708?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/>
          <p>
            Architecture
          </p>
        </Link>
      </section>
    </div>
  </div>
      )
    }
}

export default Home
