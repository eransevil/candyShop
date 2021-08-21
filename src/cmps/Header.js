import React from 'react'
// import { Button } from '@material-ui/core';
import axios from 'axios';
import { HashRouter as Router, NavLink } from 'react-router-dom';

export default function header({ loggedInUser, handleLogin }) {

  const doLogOut = async () => {
    await axios.post(`${BASE_URL}user/logout`, loggedInUser)
    window.localStorage.clear(); //clear all localstorage
    handleLogin(null)
  }

  const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'


  return (
    <div className="app-header full ">
      <div className="nav-links main-layout">
        <Router>
          <NavLink className="nav-link-item" exact to="/" activeClassName="active-nav">Home</NavLink>
          <NavLink className="nav-link-item" exact to="/CandyPage" activeClassName="active-nav">CandyPage</NavLink>
          <NavLink className="nav-link-item" to="/Contact" activeClassName="active-nav">Contact</NavLink>
          {loggedInUser && loggedInUser.isAdmin && <NavLink className="nav-link-item" to="/Admin" activeClassName="active-nav">Admin</NavLink>}
          <NavLink className="nav-link-item" to="/Readme" activeClassName="active-nav">Readme</NavLink>
          {!loggedInUser && <NavLink className="signup-link nav-link-item" exact to="/Signup" activeClassName="active-nav">Signup</NavLink>}
          {loggedInUser && <a onClick={doLogOut} className="signup-link nav-link-item">Signout</a>}
          <NavLink className="cart-link nav-link-item" exact to="/Cart" activeClassName="active-nav">🛒</NavLink>
        </Router>
        {loggedInUser && <div className="hello-msg"> Hello {loggedInUser.userName}</div>}

      </div>

    </div>
  )
}
