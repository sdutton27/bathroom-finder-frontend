import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

import './navbar.css'

export default function Navbar() {
    //const {user, setUser} = useContext(UserContext)
    const {user, setUser, logMeOut} = useContext(UserContext)
    // console.log(user)
  return (
    <div className='nav-container'>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#"><b>Map</b></a>
        <a href="#">Favorites</a>
        <a href="#">Profile</a>
        <div className="animation nav-home"></div>
      </nav>
    </div>

    // <></>
    // <>
    // { (user.id) ?  

    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //             <div className="container-fluid">
    //                 <a className="navbar-brand" href="/">Navbar</a>
    //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //                     <li className="nav-item">
    //                     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    //                         <Link className="nav-link active" aria-current="page" to="/map">Map</Link>
    //                     </li>
    //                     {/* {(user.id)? 
    //                     <> */}
    //                     <span>{user.email}</span>
    //                     <button onClick={logMeOut}>Logout</button>
    //                     {/* </>
    //                     : <></>} */}
    //                 </ul>
    //             </div>
    //         </nav>
    // : <></>}
    // </>
  )
}