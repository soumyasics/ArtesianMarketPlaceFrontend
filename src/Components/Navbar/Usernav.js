import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../Assets/Home Logo.png"
import Profileimg from "../../Assets/aubrey-graham-photo-u164.jpg"
import axiosInstance from '../../Schemas/BaseUrl'
import { toast } from 'react-toastify'



function Usernav({url}) {
  console.log(url,"hello");
  // const url = "http://localhost:4004";

    const navigate = useNavigate()
    const userid=localStorage.getItem("userid")
    console.log(userid);

    const[data,setData]=useState({})

    useEffect(()=>{
      axiosInstance.post(`viewUserById/${userid}`)
      .then((res)=>{
          console.log(res);
          setData(res.data.data)
      })
      .catch((err)=>{
          console.log(err);
      })
  },[])

console.log(`${url}/${data?.image?.filename}`);




const[readerid,setReaderid]=useState(null);

const handleLogout = () => {
  localStorage.removeItem("userid");
  navigate("/")
  setReaderid(null);

};

useEffect(() => {
  if (localStorage.getItem("userid") == null) {
    navigate("/user_login");
  }
});


  return (
<nav id='common-home-navbar' class="navbar bg-body-tertiary">
  <div class="container-fluid">
  <img style={{ cursor: "pointer"}}
          src={logo}
          onClick={() => navigate("")}
          alt="Logo"      
    
          id="logo"/>
    
    <form class="d-flex usernav-links" role="search">
      <p><Link to="/">Home</Link></p>
      <p><Link to ="/aboutus">About</Link></p>
      {/* <p><Link to ="/view_artists">Artist</Link></p> */}
      <p><Link to ="/gallery">Gallery</Link></p>


 
 </form>

 <div id="nav-profileimg" class="dropdown ">
 
 <img src={`${url}/${data?.image?.filename}`}  className="dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"/>
 
 <ul class="dropdown-menu dropdownbackg">
   <li><Link to="/user_profile" class="dropdown-item ">Profile</Link></li>
   <li><Link to="/user_dashboard" class="dropdown-item ">Dashboard</Link></li>
   <li><Link to="/user_notification" class="dropdown-item ">Notification</Link></li>
   <li><Link to="/user_cart" class="dropdown-item ">Cart</Link></li>
   <li><Link to="/view_orders" class="dropdown-item ">My Orders</Link></li>
   <li><hr class="dropdown-divider"/></li>
   <li onClick={handleLogout}><a class="dropdown-item" href="#" >Logout</a></li>
 </ul>
</div>
 
  </div>
</nav>
  )
}

export default Usernav