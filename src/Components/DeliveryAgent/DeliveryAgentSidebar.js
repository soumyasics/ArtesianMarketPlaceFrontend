import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';


function DeliveryAgentSidebar() {
  const deliveryid=localStorage.getItem("deliveryid")
  console.log(deliveryid);

  const[readerid,setReaderid]=useState(null);

  const handleLogout = () => {
    localStorage.removeItem("deliveryid");
    setReaderid(null);
  };

  const navigate=useNavigate()

  useEffect(() => {
    if (localStorage.getItem("deliveryid") == null) {
      navigate("/delivery_agent_login");
    }
  });

  return (
    <div>
        <div id="wrapper">
        <div id="sidebar-wrapper">
          <div className='sidebar-logo'>
            <Icon icon="dashicons:art" className="sidebar-logo-icon" />
            <h1>Museofire</h1>
            <p>The art of connection</p>
          </div>

          <ul className="sidebar-nav" id="menu">
            <li className="active">
              <Link to="/delivery_agent_routes">Requests</Link>
            </li>
            <li>
              <Link to="/delivery_agent_jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/delivery_agent_profile">Profile</Link>
            </li>
            <li  onClick={handleLogout}>
              <Link >Logout</Link>
            </li>


          </ul>
        </div>
      </div>
    </div>
  )
}

export default DeliveryAgentSidebar