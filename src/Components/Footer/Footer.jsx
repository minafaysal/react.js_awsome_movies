import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (<>

<footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
    <a href=""  className="d-flex align-items-center mb-3 text-muted text-decoration-none">All Rights Recived © 2022
      </a>
    
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Home</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Features</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Pricing</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">FAQs</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="/about" className="nav-link p-0 text-muted">About </NavLink></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Home</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Features</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Pricing</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">FAQs</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="/about" className="nav-link p-0 text-muted">About </NavLink></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Home</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Features</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Pricing</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">FAQs</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="/about" className="nav-link p-0 text-muted">About </NavLink></li>
      </ul>
    </div>
  </footer>
      

 
 

    </>
  )
}
