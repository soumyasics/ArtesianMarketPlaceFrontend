import React, { useEffect, useState } from 'react';
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import AdminSidebar from '../AdminSidebar';
import "./AdminViewAgent.css"
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axiosInstance from '../../../Schemas/BaseUrl';


function AdminViewAgents() {
  const[delivery,setDelivery]=useState([])

  const adminid=localStorage.getItem("adminid")

  const navigate=useNavigate()
  if(adminid===null){
    navigate("/admin")
  }


  useEffect(()=>{
    axiosInstance.post(`viewdeliverys`)
    .then((res)=>{
      console.log(res);
      setDelivery(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
       <div className='AdminViewAgents'>
    <div className="row">
        <div className="col-2">
        <AdminSidebar/>
        </div>
        <div class='col-10 Admin-agentlist' >

        <div className='Routes-table'>

<h1>Delivery Agent</h1>

<div className='deliveryagent-requestsbtn'>
  <Link to="/admin_viewagentrequests"> <button>REQUESTS <Icon icon="fluent-mdl2:message-friend-request" className="agentrequest"/> </button> </Link>

</div>
        
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
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Aadhar</th>
                    <th>Place</th>
                    <th>View More</th>
    
                  </tr>
                </thead>
                <tbody >
                {delivery ? (
  delivery.length ? (
    delivery.map((a,index) => {
      // const serialNumber = index + 1;
         return( 

                      <tr>
                        <td>{index+1}</td>
                        <td>{a?.firstname}</td>
                        <td>{a?.email}</td>
                        <td>{a?.contact}</td>
                        <td>{a?.aadhar}</td>
                        <td>{a?.district}</td>
                        <td><Link to={`/admin_viewdeliveryagentindividua/${a._id}`}>click here for further details...</Link></td>
                      </tr>
                                        )
                                      })
                                   ) : (
                                     <div>No data available</div>
                                     )
                                     ) : (
                                       <div>No DeliveryAgent Registered</div>
                                     )}
                
                </tbody>
              </Table>
              

        </div>

   

            </div>
</div>
    </div>
    </>
  )
}

export default AdminViewAgents