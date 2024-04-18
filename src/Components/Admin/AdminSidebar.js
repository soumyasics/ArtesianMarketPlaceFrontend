import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';


function AdminSidebar() {
  const navigate=useNavigate()
  const[readerid,setReaderid]=useState(null);
  const handleLogout = () => {
    localStorage.removeItem("adminid");
    setReaderid(null);
    navigate("/admin")
  };

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
              <Link to="/admin_viewuser">User</Link>
            </li>
            <li>
              <Link to="/admin_viewartist">Artists</Link>
            </li>
            <li>
              <Link to="/admin_viewagent">Delivery Agent</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>

           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar