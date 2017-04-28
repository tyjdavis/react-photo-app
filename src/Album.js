import React, { Component } from 'react';

class Album extends Component {


  render() {
    return(
      <div className="app">
      <section className="row">
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/paul-morris.jpg"/>Photo 1</div>
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/ricardo-gomez-angel.jpg"/>Photo 2</div>
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/sean-afnan.jpg"/>Photo 3</div>
      </section>
      <section className="row">
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/teddy-kelley.jpg"/>Photo 4</div>
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/toa-heftiba.jpg"/>Photo 5</div>
        <div className="col s4"><img className="responsive-img materialboxed" src="/images/paul-morris.jpg"/>Photo 6</div>
      </section>
    </div>
      )
    }
}

export default Album
