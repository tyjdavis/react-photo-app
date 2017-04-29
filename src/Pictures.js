import React, { Component } from 'react';


class Pictures extends Component {

openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

  render() {
    let picArray = [];
    let picArray2 = [];

      if(this.props.match.params.pictures === 'album1') {

        picArray = ["https://images.unsplash.com/photo-1485546784815-e380f3297414?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?dpr=1&auto=format&fit=crop&w=1500&h=956&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1456086272160-b28b0645b729?dpr=1&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop=&bg=",
                  ]
        picArray2 =["https://images.unsplash.com/photo-1449247613801-ab06418e2861?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1465068161324-0e211f78ef16?dpr=1&auto=format&fit=crop&w=1500&h=925&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
                  ]
      }

      if(this.props.match.params.pictures === 'album2') {

        picArray = ["https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1487701928368-32a06b4c6873?dpr=1&auto=format&fit=crop&w=1500&h=1046&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1484497283823-5673190b78ec?dpr=1&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop=&bg=",
                  ]
        picArray2 =["https://images.unsplash.com/photo-1484114805781-7e5bdef9cb9d?dpr=1&auto=format&fit=crop&w=1500&h=870&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1488923937092-5a9ccc6eff59?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1484799948160-c41b81b66c07?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
                  ]
      }

      if(this.props.match.params.pictures === 'album3') {

        picArray = ["https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?dpr=1&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1435777940218-be0b632d06db?dpr=1&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1487772841463-eb1f383a9e67?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
                  ]
        picArray2 =["https://images.unsplash.com/photo-1487604074519-783b9026a42a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1488378207160-463e1eb439aa?dpr=1&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?dpr=1&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop=&bg="
                  ]
      }

      if(this.props.match.params.pictures === 'album4') {

        picArray = ["https://images.unsplash.com/photo-1467739514899-277e514b48da?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1484995978482-cf913162930c?dpr=1&auto=format&fit=crop&w=1500&h=962&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1461945547454-b75fe1130fc6?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=&bg=",
                  ]
        picArray2 =["https://images.unsplash.com/photo-1463541555616-ad5d33ef6339?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1470921346718-b615f097684b?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1471070273880-07268b273c1a?dpr=1&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop=&bg="
                  ]
      }

      if(this.props.match.params.pictures === 'album5') {

        picArray = ["https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1478204896214-bb1bf5b0b31d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1462804993656-fac4ff489837?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
                  ]
        picArray2 =["https://images.unsplash.com/photo-1488905971602-47901d26961b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1489329987640-69e21afcb1d5?dpr=1&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1489112318845-bcfb7233b1a1?dpr=1&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop=&bg="
                  ]
      }

      if(this.props.match.params.pictures === 'album6') {

        picArray = ["https://images.unsplash.com/photo-1492549181518-0d81b81f05c6?dpr=1&auto=format&fit=crop&w=1500&h=1010&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1492815003831-a1dc8a345d1d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1491895781182-2d272c8f7d5b?dpr=1&auto=format&fit=crop&w=1500&h=999&q=80&cs=tinysrgb&crop=&bg=",
                  ]
        picArray2 =["https://images.unsplash.com/photo-1492140818141-7b1370b0b5ee?dpr=1&auto=format&fit=crop&w=1500&h=999&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1492355040260-cd982083603e?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=&bg=",
                    "https://images.unsplash.com/photo-1491813244632-dfda506f9508?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=&bg="
                  ]
      }

    return(

      <div className="Album">

        <header className="header">
          <nav className="nav-extended">
            <div className="nav-content">
              <span className="nav-title">Album</span>
              <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                <i className="material-icons" onClick={this.openNav.bind(this)}>Side</i>
              </a>
            </div>
          </nav>
        </header>

        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
          <a href="/">Home</a>
          <a href="album1">Album 1</a>
          <a href="album2">Album 2</a>
          <a href="album3">Album 3</a>
          <a href="album4">Album 4</a>
          <a href="album5">Album 5</a>
          <a href="album6">Album 6</a>
        </div>

        <div className="photos">
          <section className="row">
            {picArray.map((url, index) => {
              return (
                <div className="col s4" key={index}><img className="responsive-img materialboxed" src={url}/>Photo</div>
              )
            })}
          </section>

          <section className="row">
            {picArray2.map((url, index) => {
              return (
              <div className="col s4" key={index}><img className="responsive-img materialboxed" src={url}/>Photo</div>
              )
            })}
          </section>
        </div>
      </div>
      )
    }
  }




  export default Pictures
