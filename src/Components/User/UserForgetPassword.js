import React, { useState } from "react";
import "../User/UserLogin.css";
import logo from "../../Assets/logo.svg";
import "../User/UserFP.css"
import { Link } from "react-router-dom";


function UserForgetPassword() {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  })

  const changefn = (e) => {

    const { name, value } = e.target

    setData(preData => ({

      ...preData, [name]: value

    }))

    setErrors(preErrors => ({
      ...preErrors, [name]: ""
    }))

  }


  const formHandeling = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    return '';
  }

  const submitfn = (e) => {
    e.preventDefault()

    const errors = {}

    errors.email = formHandeling("Email", data.email)
    errors.password = formHandeling("Password", data.password)

    setErrors(errors)

  }

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
          <div className="col-lg-6 col-md-6 col-sm-6 FPimg" >
            <div>

              <div className="user_log_box_white userFP">
                <p className="user_reg_title">User Reset Password</p>



                <div className="row">


                  <form onSubmit={submitfn}>


                    <div className="col-12 mt-2">
                      <input
                        type="email"
                        className="form-control user_inp rounded-0 login_icon_input"
                        placeholder="email"
                        name="email"
                        onChange={changefn}
                      />

                      {errors.email && <div className="text-danger">{errors.email}</div>}

                    </div>
                    <div className="col-12 mt-2">
                      <input
                        type="password"
                        className="form-control user_inp rounded-0 password_icon_input"
                        placeholder="Password"
                        name="password"
                        onChange={changefn}
                      />

                      {errors.password && <div className="text-danger">{errors.password}</div>}

                    </div>

                    <div className="col-12 mt-2 user_reg_btn userbtn">
                      <button type="submit">Change</button>
                    </div>
                    <div className="col-12 mt-2 user_log_forgot_pass FPp">
                    <p><Link to="/user_register">Don't have an account? Register</Link></p>
                    </div>
                  </form>
                </div>




              </div>

              {/* <div className="user_reg_link" >
              <p>Have an account Login</p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserForgetPassword