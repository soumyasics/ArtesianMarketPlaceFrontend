import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ArtistLogin() {

  const [artistlog, setArtistlog] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  })


  const changefn = (e) => {
    const { name, value } = e.target;
    setArtistlog(predata => ({
      ...predata, [name]: value
    }))

    setErrors(preError => ({
      ...preError, [name]: ""
    }))
  }


  const formValidation = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    return '';
  }


  const submitfn = (e) => {
    e.preventDefault();

    let errors = {}

    errors.email = formValidation("Email", artistlog.email)
    errors.password = formValidation("Password", artistlog.password)

    setErrors(errors)

  }

  return (
    <div>
      <div className="user_log_box_blue">
        <p>Sign In as :</p>
        <Link to='/user_login'><p>User</p></Link>
        <Link to='/artist_login'><p className='active' >Artist</p></Link>
        <Link to='/delivery_agent_login'><p>Delivery Agent</p></Link>
        {/* <p>Admin</p> */}
      </div>
      <div className="user_log_box_white">
        <p className="user_reg_title">Sign In as Artist</p>
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
              {errors.password && <div className='text-danger'>{errors.password}</div>}
            </div>
            <div className="col-12 mt-2 user_log_forgot_pass">
              <p>Forgot Password</p>
            </div>
            <div className="col-12 mt-2 user_reg_btn">
              <button type='submit'>Register</button>
            </div>
            <div className="col-12 mt-2 user_log_forgot_pass">
              <p>Don't have an account? Register</p>
            </div>
          </form>
        </div>





      </div>

      {/* <div className="user_reg_link" >
              <p>Have an account Login</p>
            </div> */}
    </div>
  )
}

export default ArtistLogin
