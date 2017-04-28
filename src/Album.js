import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Album extends Component {


  render() {
    return(
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
      )
    }
}

export default Album
