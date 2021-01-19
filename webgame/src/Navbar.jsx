import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar=()=>{
    return(
     <>
     

        
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink class="navbar-brand" to="/">
    <a to="/"><img src="https://eastsidegamer.com/wp-content/uploads/2020/10/13.png"/></a>  
    </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink activeClassName='menu_active' exact  className="nav-link active" aria-current="page"  to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="/reviews">Reviews</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="/shop">Shop</NavLink>
        </li>
        
        <li class="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="/about">About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="/join">Join Us</NavLink>
        </li>
        
        
        
      </ul>
   
    </div>
  </div>
</nav>

     </>
    );
};

export default Navbar;