import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../Assets/Home Logo.png"
import Profileimg from "../../Assets/aubrey-graham-photo-u164.jpg"



function Usernav() {
    const navigate = useNavigate()
  return (
<nav id='common-home-navbar' class="navbar bg-body-tertiary">
  <div class="container-fluid">
  <img style={{ cursor: "pointer"}}
          src={logo}
          onClick={() => navigate("/")}
          alt="Logo"      
    
          id="logo"/>
    
    <form class="d-flex usernav-links" role="search">
      <p><Link>Home</Link></p>
      <p><Link to ="/aboutus">About</Link></p>
      <p><Link to ="/view_artists">Artist</Link></p>
      <p><Link to ="/gallery">Gallery</Link></p>


 
 </form>

 <div id="nav-profileimg" class="dropdown ">
 
 <img src={Profileimg}  className="dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"/>
 
 <ul class="dropdown-menu dropdownbackg">
   <li><Link to="/user_profile" class="dropdown-item ">Profile</Link></li>
   <li><Link to="/user_dashboard" class="dropdown-item ">Dashboard</Link></li>
   <li><Link to="/user_notification" class="dropdown-item ">Notification</Link></li>
   <li><Link to="/user_cart" class="dropdown-item ">Cart</Link></li>
   <li><Link to="/view_orders" class="dropdown-item ">My Orders</Link></li>
   <li><hr class="dropdown-divider"/></li>
   <li><a class="dropdown-item" href="#">Logout</a></li>
 </ul>
</div>
 
  </div>
</nav>
  )
}

export default Usernav