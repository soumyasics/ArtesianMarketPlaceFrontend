import React from 'react'
import logo from "../../Assets/logo.svg"
import "./AdminLogin.css"

function AdminLogin() {
  return (
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
          <div className="col-lg-6 col-md-6 col-sm-6 FPimg" >
            <div>

              <div className="user_log_box_white userFP">
                <p className="user_reg_title">Admin Login</p>
                <div className="row">

                  <form >

                    <div className="col-12 mt-2">
                      <input
                        type="email"
                        className="form-control user_inp rounded-0 login_icon_input"
                        placeholder='email'
                        name='email'
                        


                      />
                      {/* {errors.email && <div className='text-danger'> {errors.email} </div>} */}
                    </div>
                    <div className="col-12 mt-2">
                      <input
                        type="password"
                        className="form-control user_inp rounded-0 password_icon_input"
                        placeholder="Password"
                        name='password'
                        
                      />
                      {/* {errors.password && <div className='text-danger'> {errors.password} </div>} */}
                    </div>

                    <div className="col-12 mt-2 user_reg_btn userbtn">
                      <button type='submit'>Log in</button>
                    </div>
                   
                  </form>
                </div>





              </div>


            </div>
          </div>
        </div>
      </div>
  )
}

export default AdminLogin