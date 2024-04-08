import React, { useState } from 'react'
import logo from "../../Assets/logo.svg"
import "./AdminLogin.css"
import {toast}from "react-toastify"

function AdminLogin() {

  const[data,setData]=useState({
    username:"",
    password:""
  })

  let username="admin"
  let password="admin123"
const changefn=((a)=>{
  setData({
    ...data,[a.target.name]:a.target.value
  })
})

const submitfn=((a)=>{
  a.preventDefault()
  if(username==data.username){
    if(password==data.password){
      toast.success("Login Successfully")
    }
    else{
      toast.error("Password Error")
    }
  }
  else{
    toast.error("Username Error")
  }
})


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

                  <form onSubmit={submitfn} >

                    <div className="col-12 mt-2">
                      <input
                        type="text"
                        className="form-control user_inp rounded-0 login_icon_input"
                        placeholder='username'
                        name='username'
                        value={data.username}
                        onChange={changefn}


                      />
                      {/* {errors.email && <div className='text-danger'> {errors.email} </div>} */}
                    </div>
                    <div className="col-12 mt-2">
                      <input
                        type="password"
                        className="form-control user_inp rounded-0 password_icon_input"
                        placeholder="Password"
                        name='password'
                        value={data.password}
                        onChange={changefn}
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