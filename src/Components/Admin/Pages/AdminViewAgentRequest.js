import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import AdminSidebar from "../AdminSidebar";
import { Link } from "react-router-dom";
import axiosInstance from "../../../Schemas/BaseUrl";

function AdminViewAgentRequest() {
  const[deliveryreq,setDeliveryreq]=useState([])

  useEffect(()=>{
    axiosInstance.post(`/viewdeliveryReqs`)
    .then((res)=>{
      console.log(res);
      setDeliveryreq(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])



  return (
    <>
      <div className="AdminViewAgents">
        <div className="row">
          <div className="col-2">
            <AdminSidebar />
          </div>
          <div class="col-10 Admin-agentlist">
            <div className="Routes-table">
              <h1>Delivery Agent Requests</h1>

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
                    <th>Place</th>
                    <th>View More</th>
                  </tr>
                </thead>
                <tbody>
                {deliveryreq ? (
  deliveryreq.length ? (
    deliveryreq.map((a,index) => {
      // const serialNumber = index + 1;
         return( 

                  <tr  key={index}>
                    <td>{index+1}</td>
                    <td>{a?.firstname} </td>
                    <td>{a?.email}</td>
                    <td>{a?.city}</td>
                    <td>
                      <Link to={`/admin_viewrequestedagentdetails/${a._id}`}>
                        click here for further details...
                      </Link>
                    </td>
                  </tr>
                        )
                      })
                   ) : (
                     <div>No data available</div>
                     )
                     ) : (
                       <div>No request is available</div>
                     )}
                  
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminViewAgentRequest;
