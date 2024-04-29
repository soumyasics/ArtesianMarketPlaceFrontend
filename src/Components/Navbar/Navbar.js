import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../Assets/Home Logo.png"
import Profileimg from "../../Assets/aubrey-graham-photo-u164.jpg"


function Navbar() {
  const navigate = useNavigate()
  return (
    // <nav id="common-home-navbar" className="navbar navbar-expand-lg bg-body-tertiary"> 
    //  <div className="containerFluid text-white user-nav">
    //   <img style={{ cursor: "pointer"}}
    //       src={logo}
    //       onClick={() => navigate("/")}
    //       alt="Logo"      
    
    //       id="logo"/>
        
    //     <div className="collapse navbar-collapse " id="navbarNav">
    //     <ul className="navbar-nav a1 gap-4" style={{ marginLeft: "900px" }}>

    //         <li
    //           style={{ cursor: "pointer" }}
    //           onClick={() => {
    //             navigate("/");
    //           }}
    //           className="nav-item"
    //         >
    //           <a className="nav-link active text-white" aria-current="page">
    //             Home
    //           </a>
    //         </li>

    //         <li
    //           style={{ cursor: "pointer" }}
    //           onClick={() => {
    //             navigate("/");
    //           }}
    //           className="nav-item"
    //         >
    //           <a className="nav-link active text-white" aria-current="page">
    //             About
    //           </a>
    //         </li>

    //         <li
    //           style={{ cursor: "pointer" }}
    //           onClick={() => {
    //             navigate("/");
    //           }}
    //           className="nav-item"
    //         >
    //           <a className="nav-link active text-white" aria-current="page">
    //             Gallery
    //           </a>
    //         </li>

    //         <li
    //           style={{ cursor: "pointer" }}
    //           onClick={() => {
    //             navigate("/");
    //           }}
    //           className="nav-item"
    //         >
    //           <a className="nav-link active text-white" aria-current="page">
    //             Profile
    //           </a>
    //         </li>
    //         </ul>
    //     </div>
          

    //     </div>

    // </nav>


<nav id='common-home-navbar' class="navbar bg-body-tertiary">
  <div class="container-fluid">
  <img style={{ cursor: "pointer"}}
          src={logo}
          onClick={() => navigate("/")}
          alt="Logo"      
    
          id="logo"/>
    
    <form class="d-flex usernav-links" role="search">
      <p><Link to="/">Home</Link></p>
      <p><Link to ="/aboutus">About</Link></p>
      <p><Link to ="/user_login">Login</Link></p>


 
 </form>

 
 
  </div>
</nav>

       
    
  )
}

export default Navbar