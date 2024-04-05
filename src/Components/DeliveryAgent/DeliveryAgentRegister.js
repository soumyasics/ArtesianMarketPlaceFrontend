import React from 'react'
import logo from "../../Assets/logo.svg";


function DeliveryAgentRegister() {
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
          <div className="user_reg_box_white">
            <p className="user_reg_title">Sign Up as Delivery Agent</p>
            <form >
              <div className="row">
                <div className="col-12 mt-2">
                  <input
                    type="text"
                    className="form-control user_inp rounded-0"
                    placeholder="First name"
                    name="firstname"
                   
                    required
                  />
                 
                </div>
                <div className="col-12 mt-2">
                  <input
                    type="text"
                    className="form-control user_inp rounded-0"
                    placeholder="Last name"
                    name="lastname"
                 
                    required
                  />
                 
                </div>
                <div className="col-12 mt-2">
                  <input
                    type="email"
                    className="form-control user_inp rounded-0"
                    placeholder="Email"
                    name="email"
                   
                    required
                  />
                 
                </div>
                <div className="col-5 mt-2">Date of Birth</div>
                <div className="col-7 mt-2">
                  <input
                    type="date"
                    className="form-control user_inp rounded-0"
                    placeholder=""
                    name="dob"
                   
                    required
                  />
                  
                </div>
                <div className="col-12 mt-2">
                  <input
                    type="number"
                    className="form-control user_inp rounded-0"
                    placeholder="Contact"
                    name="contact"
                    
                    required
                  />
                  
                </div>
                <div className="col-12 mt-2">
                  <input
                    type="text"
                    className="form-control user_inp rounded-0"
                    placeholder="Address"
                    name="address"
                   
                    required
                  />
                 
                </div>
               
                <div className="col-12 mt-2">
                  <input
                    type="file"
                    className="form-control user_inp rounded-0"
                    placeholder=""
                    name="image"
                   
                    required
                  />
                </div>
                <div className="col-12 mt-2">
                  <input
                    type="password"
                    className="form-control user_inp rounded-0"
                    placeholder="Password"
                    name="password"
                   
                    required
                  />
                  
                </div>
                <div className="col-12 mt-2 user_reg_btn mt-4">
                  <button type="submit">Register</button>
                </div>
              </div>
            </form>
          </div>

          <div className="user_reg_link">
            <p>Have an account Login</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DeliveryAgentRegister