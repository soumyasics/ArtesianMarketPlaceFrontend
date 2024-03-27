import React from 'react';
import './ArtistSidebar.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


function ArtistSidebar() {
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
              <Link to="">Works</Link>
            </li>
            <li>
              <Link to="/artist_profile">Profile</Link>
            </li>
            <li>
              <Link to="">Chat</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArtistSidebar;
