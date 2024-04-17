import React from 'react'
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import AdminSidebar from '../AdminSidebar';
import { Link } from 'react-router-dom';

function AdminViewAgentRequest() {
  return (
    <>
       <div className='AdminViewAgents'>
    <div className="row">
        <div className="col-2">
        <AdminSidebar/>
        </div>
        <div class='col-10 Admin-agentlist' >

        <div className='Routes-table'>

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
                <tbody >
        
                      <tr >
                        <td>1</td>
                        <td>Work name</td>
                        <td>Trivandram</td>
                        <td>Kollam</td>
                        <td><Link to="/admin_viewrequestedagentdetails">click here for further details...</Link></td>
                        
                        
                       
                      
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

export default AdminViewAgentRequest