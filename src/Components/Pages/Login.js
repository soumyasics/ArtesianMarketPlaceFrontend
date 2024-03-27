import React from "react";
import "../User/UserLogin.css";
import logo from "../../Assets/logo.svg";
import UserLogin from "../User/UserLogin";
import ArtistLogin from '../Artist/ArtistLogin'
import DeliveryAgent from '../DeliveryAgent/DeliveryAgent'


function Login({ data }) {
  return (
    <div>
      <div className="user_reg">
        <div className="row user_reg_box">
          <div className="col-lg-6 col-md-6 col-sm-6 user_reg_box1">
            <div className="user_reg_box1_logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="user_reg_name">
              <h3>Museofire</h3>
              <p>The art of connection</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 user_reg_box2 m-0 p-0">
            {data == "user" ? (
              <UserLogin />
            ) : data == "artist" ? (
              <ArtistLogin />
            ) : data == "deliveryAgent" ? (
              <DeliveryAgent />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
