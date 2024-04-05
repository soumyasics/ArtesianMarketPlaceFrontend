import React, { useState } from 'react'
import "../User/UserLogin.css";
import logo from "../../Assets/logo.svg";
import "../User/UserFP.css"
import axios from 'axios';
import axiosInstance from '../../Schemas/BaseUrl';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

function ArtistForgetPassword() {
  const [artistfp, setArtistfp] = useState({

    email: "",
    password: ""

  })

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  })

  const changefn = (e) => {
    const { name, value } = e.target
    setArtistfp(predata => ({ ...predata, [name]: value }))
    setErrors(preErrors => ({ ...preErrors, [name]: "" }))
  }

  const formValidation = (fieldName, value) => {

    if (!value.trim()) { return `${fieldName} is required` }
    if (fieldName === "Password" && value.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (fieldName === "Password" && !/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (fieldName === "Password" && !/\d/.test(value)) {
      return "Password must contain at least one number";
    }
    return ''

  }
const navigate=useNavigate()
  const submitfn = (e) => {
    e.preventDefault();

    let errors = {}

    errors.email = formValidation("Email", artistfp.email);
    errors.password = formValidation("Password", artistfp.password)

    setErrors(errors)
    if (!errors.email && !errors.password) {
      axiosInstance.post(`forgotPwdArtist`,artistfp)
      .then((res)=>{
        console.log(res);
        if(res.data.status==200){
          toast.success("Password Updated Succesfully")
          navigate("/artist_login")
        }
        else {
          toast.error(res.data.msg)
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  

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
                <p className="user_reg_title">Artist Reset Password</p>
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
                      {errors.email && <div className='text-danger'> {errors.email} </div>}
                    </div>
                    <div className="col-12 mt-2">
                      <input
                        type="password"
                        className="form-control user_inp rounded-0 password_icon_input"
                        placeholder="Password"
                        name="password"
                        onChange={changefn}
                      />
                      {errors.password && <div className='text-danger'> {errors.password} </div>}
                    </div>

                    <div className="col-12 mt-2 user_reg_btn userbtn">
                      <button type='submit'>Change</button>
                    </div>
                    <div className="col-12 mt-2 user_log_forgot_pass FPp">
                    <Link to="/artist_register" style={{textDecoration:"none"}}><p>Don't have an account? Register</p></Link>  
                    </div>
                  </form>
                </div>








              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistForgetPassword