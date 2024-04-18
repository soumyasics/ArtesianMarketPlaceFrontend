import React from 'react';
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import AdminSidebar from '../AdminSidebar';
import "./AdminViewAgent.css"
import { Link } from 'react-router-dom';


function AdminViewAgents() {
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
                    <th>Order</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Status</th>
                    <th>Delivery</th>
                    <th>View More</th>
                   
                    
                    
                  </tr>
                </thead>
                <tbody >
        
                      <tr >
                        <td>1</td>
                        <td>Work name</td>
                        <td>Trivandram</td>
                        <td>Kollam</td>
                        <td>Status</td>
                        <td>Dtdc</td>
                        <td><Link to="/Admin_viewdeliveryagentindividual">click here for further details...</Link></td>
                        
                        
                       
                      
                      </tr>
                
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