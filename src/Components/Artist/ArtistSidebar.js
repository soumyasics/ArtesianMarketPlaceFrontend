import React, { useEffect, useState } from 'react';
import './ArtistSidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';


function ArtistSidebar() {
  const artistid = localStorage.getItem("artistid");
  console.log(artistid);

  const[readerid,setReaderid]=useState(null);
  const handleLogout = () => {
    localStorage.removeItem("artistid");
    setReaderid(null);
  };

  const navigate=useNavigate()

  useEffect(() => {
    if (localStorage.getItem("artistid") == null) {
      navigate("/artist_login");
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
              <Link to="/artist_orders">Orders</Link>
            </li>
            <li>
              <Link to="/artist_works">Works</Link>
            </li>
            <li>
              <Link to="/artist_profile">Profile</Link>
            </li>
            <li>
              {/* <Link to="/artist_chatmainpage">Chat</Link> */}
            </li>
            <li onClick={handleLogout}>
              <Link >Logout</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArtistSidebar;
