import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../Schemas/BaseUrl";

function UserLogin() {
  // console.log(localStorage.getItem("userid"));
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const changefn = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    return "";
  };

  const submitfn = (e) => {
    e.preventDefault();
    let errors = {};
    let formIsValid = true;

    errors.email = validateField("Email", data.email);
    errors.password = validateField("Password", data.password);

    setErrors(errors);

    if (formIsValid) {
      console.log("data", data);
    }
    axiosInstance.post(`loginUser`,data)
    .then((res)=>{
      console.log(res);
      if(res.data.status==200){
        toast.success("Login Succesfully")
      }
      else if(res.data.status==500){
        toast.error(res.data.msg)
      }
    })
    .catch((err)=>{
      toast.error("User Not Found")
    })

  };

  return (
    <div>
      <div className="user_log_box_blue">
        <p>Sign In as :</p>
        <Link to="/user_login">
          <p className="active">User</p>
        </Link>
        <Link to="/artist_login">
          <p>Artist</p>
        </Link>
        <Link to="/delivery_agent_login">
          <p>Delivery Agent</p>
        </Link>
        {/* <p>Admin</p> */}
      </div>
      <div className="user_log_box_white">
        <p className="user_reg_title">Sign In as User</p>
        <div className="row">
          <form onSubmit={submitfn}>
            <div className="col-12 mt-2">
              <input
                type="email"
                className="form-control user_inp rounded-0 login_icon_input"
                placeholder="Email"
                name="email"
                onChange={changefn}
              />
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>
            <div className="col-12 mt-2">
              <input
                type="password"
                className="form-control user_inp rounded-0 password_icon_input"
                placeholder="Password"
                name="password"
                onChange={changefn}
              />
              {errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}
            </div>
            <div className="col-12 mt-2 user_log_forgot_pass">
            <Link to="/user_forgetpassword" style={{textDecoration:"none"}}> <p>Forgot Password</p></Link>
            </div>
            <div className="col-12 mt-2 user_reg_btn">
              <button type="submit">Register</button>
            </div>
            <div className="col-12 mt-2 user_log_forgot_pass">
             <Link to="/user_register"  style={{textDecoration:"none"}}><p>Don't have an account? Register</p></Link> 
            </div>
          </form>
        </div>
      </div>

      {/* <div className="user_reg_link" >
              <p>Have an account Login</p>
            </div> */}
    </div>
  );
}

export default UserLogin;
