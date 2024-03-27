import React from "react";
import "./UserRegistration.css";
import logo from "../../Assets/logo.svg";
import axiosInstance from "../../Schemas/BaseUrl";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userRegSchema } from "../../Schemas/Schemas";
import { toast } from "react-toastify";

function UserRegistration() {
  const navigate = useNavigate();


  

  const onSubmit = () => {

    const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (values.contact.toString().length !== 10) {
      alert("Contact number must be a 10-digit number");
      return;
    }
    if (values.pincode.toString().length !== 6) {
      alert("Pincode must be a 6-digit number");
      return;
    }

    if (!passwordRule.test(values.password)) {
      toast.warning("Password must meet the specified criteria");
      return;
    }

    axiosInstance.post(`/registerUser`, values)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Registration Successful");
        } else {
          alert("something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit();
  };



  const {
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    handleChange,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      dob: "",
      housename: "",
      city: "",
      pincode: "",
      contact: "",
      district: "",
      image: null,
    },
    validationSchema: userRegSchema,
    onSubmit:onSubmit
  });

  const handleImageChange = (event) => {
    setFieldValue("image", event.currentTarget.files[0]);
  };



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
              <p className="user_reg_title">Sign Up as User</p>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 mt-2">
                    <input
                      type="text"
                      className="form-control user_inp rounded-0"
                      placeholder="First name"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.firstname && touched.firstname && (
                      <p className="error">{errors.firstname}</p>
                    )}
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="text"
                      className="form-control user_inp rounded-0"
                      placeholder="Last name"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.lastname && touched.lastname && (
                      <p className="error">{errors.lastname}</p>
                    )}
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="email"
                      className="form-control user_inp rounded-0"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.email && touched.email && (
                      <p className="error">{errors.email}</p>
                    )}
                  </div>
                  <div className="col-5 mt-2">Date of Birth</div>
                  <div className="col-7 mt-2">
                    <input
                      type="date"
                      className="form-control user_inp rounded-0"
                      placeholder=""
                      name="dob"
                      value={values.dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.dob && touched.dob && (
                      <p className="error">{errors.dob}</p>
                    )}
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="number"
                      className="form-control user_inp rounded-0"
                      placeholder="Contact"
                      name="contact"
                      value={values.contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.contact && touched.contact && (
                      <p className="error">{errors.contact}</p>
                    )}
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="text"
                      className="form-control user_inp rounded-0"
                      placeholder="House Name"
                      name="housename"
                      value={values.housename}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.housename && touched.housename && (
                      <p className="error">{errors.housename}</p>
                    )}
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="text"
                      className="form-control user_inp rounded-0"
                      placeholder="City"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.city && touched.city && (
                      <p className="error">{errors.city}</p>
                    )}
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="text"
                      className="form-control user_inp rounded-0"
                      placeholder="District"
                      name="district"
                      value={values.district}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.district && touched.district && (
                      <p className="error">{errors.district}</p>
                    )}
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="number"
                      className="form-control user_inp rounded-0"
                      placeholder="Pincode"
                      name="pincode"
                      value={values.pincode}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      
                      required
                    />
                    {errors.pincode && touched.pincode && (
                      <p className="error">{errors.pincode}</p>
                    )}
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="file"
                      className="form-control user_inp rounded-0"
                      placeholder=""
                      name="image"
                      onChange={handleImageChange}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="password"
                      className="form-control user_inp rounded-0"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.password && touched.password && (
                      <p className="error">{errors.password}</p>
                    )}
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
  );
}

export default UserRegistration;
