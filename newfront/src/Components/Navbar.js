// import React from 'react'

// import { Link } from 'react-router-dom'
// function Navbar() {
//   return (
//     <div>
//       {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">NewsCenter</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item dropdown">
//       </li>
//     </ul>
//   </div>
// </nav> */}
// {/* <a class="btn btn-primary mr-3" href="/enter" role="button"onclick="window.location.href=''">Business</a>
// <a class="btn btn-primary mr-3" href="/health" role="button">Health</a>
// <a class="btn btn-primary" href="/sports" role="button">Sports</a> */}
// <Link className="nav-link" to="/entertainment">Entertainment</Link>
// <Link className="nav-link" to="/health">Health</Link>
// <Link className="nav-link " aria-current="page" to="/sports">Sports</Link>
// <Link className="nav-link" to="/technology">Technology</Link>
//     </div>
//   )
// }

// export default Navbar
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export class Navbar extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
