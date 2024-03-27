import React, { useState } from 'react'
import "../User/UserLogin.css";
import logo from "../../Assets/logo.svg";
import "../User/UserFP.css"

function DeliveryAgentForgetPassword() {
  const [deliveryfp, setDeliveryfp] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  })

  const changefn = (e) => {
    const { name, value } = e.target
    setDeliveryfp(predata => ({ ...predata, [name]: value }))
    setErrors(preErrors => ({ ...preErrors, [name]: "" }))

  }

  const formValidation = (fieldName, value) => {

    if (!value.trim()) { return `${fieldName} is required` }
    return ''

  }

  const submitfn = (e) => {
    e.preventDefault();

    const errors = {}

    errors.email = formValidation("Email", deliveryfp.email)
    errors.password = formValidation("Password", deliveryfp.password)

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
                <p className="user_reg_title">Delivery Agent Reset Password</p>
                <div className="row">

                  <form onSubmit={submitfn}>

                    <div className="col-12 mt-2">
                      <input
                        type="email"
                        className="form-control user_inp rounded-0 login_icon_input"
                        placeholder='email'
                        name='email'
                        onChange={changefn}


                      />
                      {errors.email && <div className='text-danger'> {errors.email} </div>}
                    </div>
                    <div className="col-12 mt-2">
                      <input
                        type="password"
                        className="form-control user_inp rounded-0 password_icon_input"
                        placeholder="Password"
                        name='password'
                        onChange={changefn}
                      />
                      {errors.password && <div className='text-danger'> {errors.password} </div>}
                    </div>

                    <div className="col-12 mt-2 user_reg_btn userbtn">
                      <button type='submit'>Change</button>
                    </div>
                    <div className="col-12 mt-2 user_log_forgot_pass FPp">
                      <p>Don't have an account? Register</p>
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

export default DeliveryAgentForgetPassword