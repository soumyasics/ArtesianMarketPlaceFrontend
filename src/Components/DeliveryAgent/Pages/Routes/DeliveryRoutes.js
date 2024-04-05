import React from 'react'
import "./DeliveryRoutes.css"
import DeliveryAgentSidebar from '../../DeliveryAgentSidebar'
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";

function DeliveryRoutes() {
  return (
   <>
    <div className='DeliveryRoutes'>
    <div className="row">
        <div className="col-2">
        <DeliveryAgentSidebar/>
        </div>
        <div class='col-10 routes' >

<div className='Routes-table'>

<h1>Routes</h1>
        
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
                   
                    
                    
                  </tr>
                </thead>
                <tbody >
        
                      <tr >
                        <td>1</td>
                        <td>Work name</td>
                        <td>Trivandram</td>
                        <td>Kollam</td>
                        <td id="routes-accept">Status
                        <select >
                        <option id='status-icon'>Status</option>
                        <option id="status" value='Accepted'> Accepted </option>
                      </select>
                        </td>
                        <td>Dtdc</td>
                        
                        
                       
                      
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

export default DeliveryRoutes