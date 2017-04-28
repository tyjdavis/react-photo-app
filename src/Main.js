import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Main extends Component {


  render() {
    return(
      <div className="Albums">
      <section className="row">
        <Link className="col s4" to="album1">
          <img className="responsive-img" src="/images/paul-morris.jpg"/>
          Album 1
        </Link>
        <Link className="col s4" to="album2">
          <img className="responsive-img" src="/images/ricardo-gomez-angel.jpg"/>
          Album 2
        </Link>
        <Link className="col s4" to="album3">
          <img className="responsive-img" src="/images/sean-afnan.jpg"/>
          Album 3
        </Link>
      </section>
      <section className="row">
        <Link className="col s4" to="album4">
          <img className="responsive-img" src="/images/toa-heftiba.jpg"/>
          Album 4
        </Link>
        <Link className="col s4" to="album5">
          <img className="responsive-img" src="/images/teddy-kelley.jpg"/>
          Album 5
        </Link>
        <Link className="col s4" to="album6">
          <img className="responsive-img" src="/images/paul-morris.jpg"/>
          Album 6
        </Link>
      </section>
    </div>
      )
    }
}

export default Main
