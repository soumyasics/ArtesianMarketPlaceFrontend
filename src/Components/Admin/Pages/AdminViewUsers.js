import React, { useEffect, useState } from 'react'
import AdminSidebar from '../AdminSidebar';
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import "./AdminViewUser.css"
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../Schemas/BaseUrl';


function AdminViewUsers() {
  const [viewuser, setViewuser] = useState([])

  const adminid=localStorage.getItem("adminid")
console.log(adminid);
  const navigate=useNavigate()
  if(adminid===null){
    navigate("/admin")
  }

 
  useEffect(()=>{
    axiosInstance.post("/viewUsers")
      .then((res) => {
        console.log(res, "response");
        if (res.data.msg=="No Data obtained "){
          setViewuser([])
        }
        else if (res.data.status==200){
          setViewuser(res.data.data)
        }
       
      })
      .catch((err) => {
        console.log(err, "error");
      })
  },[])



  function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  return (
    <>
      <div className='AdminViewUsers'>
        <div className="row">
          <div className="col-2">
            <AdminSidebar />
          </div>
          <div class='col-10 Admin-userslist' >

            {viewuser.length === 0 && (
              <h1 className="mt-5"> No User Found</h1>
            )}
            {viewuser.length > 0 && (
              <div className='Routes-table'>

                <h1>User</h1>

                <Table
                  striped
                  bordered
                  hover
                  className="mt-5 ms-3"
                  style={{ width: "100%" }}
                >
                  <thead style={{ height: "50px" }}>
                    <tr>
                      <th>SL</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Email</th>
                      <th>Place</th>
                      <th>contact</th>
                      <th>View More</th>



                    </tr>
                  </thead>
                  <tbody >

                    {viewuser.map((user,index)=>{

                      return(
                        <tr key={index}>
                      <td>{index+1}</td>
                      <td>{user.firstname}</td>
                      <td>{calculateAge(user.dob)}</td>
                      <td>{user.email}</td>
                      <td>{user.city},{user.district}</td>
                      <td>{user.contact}</td>         
                      <td><Link to={`/Admin_viewuserindividual/${user._id}`}>click here for further details...</Link></td>
                    </tr> 
                      )

                    })}

                   

                  </tbody>
                </Table>


              </div>
            )}





          </div>
        </div>
      </div>
    </>

  )
}

export default AdminViewUsers