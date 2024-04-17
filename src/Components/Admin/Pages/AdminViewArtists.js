import React from 'react'
import AdminSidebar from '../AdminSidebar'
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import "./AdminViewArtist.css"
import { Link } from 'react-router-dom';



function AdminViewArtists() {
  return (
    <>
     <div className='AdminViewArtists'>
    <div className="row">
        <div className="col-2">
        <AdminSidebar/>
        </div>
        <div class='col-10 Admin-artistlist' >

        <div className='Routes-table'>

<h1>Artist</h1>
        
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
                        <td><Link to="/Admin_viewartistindividual">click here for further details...</Link></td>
                        
                        
                        
                       
                      
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

export default AdminViewArtists