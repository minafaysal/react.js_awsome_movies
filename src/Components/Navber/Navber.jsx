import React from "react";
import { NavLink } from "react-router-dom";

export default function Navber({loginData,logOut}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top   ">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold" to="/#">
            Movies
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {loginData?  <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to="/home">
                  Home
                </NavLink>
              </li>
          
              <li className="nav-item">
                <NavLink className="nav-link " to="/movies">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/tv">
                  Tv
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/actors">
                  Actors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  About
                </NavLink>
              </li>
            
            </ul>:''}
          
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {loginData? <> <li className="nav-item bg-dark mx-1  btn btn-outline-light p-0 ">
                <NavLink className="nav-link text-muted " >
                 {"Welcome "+loginData.first_name}
                </NavLink>
              </li> 
              <li  className="nav-item bg-dark mx-1  btn p-0 btn-outline-light" onClick={()=>{logOut()}}>
                <NavLink className="nav-link text-muted"  >
                  Logout
                </NavLink>
              </li></>:<>  <li className="nav-item">
                <NavLink className="nav-link " to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/login">
                  Login
                </NavLink>
              </li></>}
            
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
