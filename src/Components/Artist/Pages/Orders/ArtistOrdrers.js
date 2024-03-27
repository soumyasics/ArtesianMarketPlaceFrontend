import React from 'react'
import ArtistSidebar from '../../ArtistSidebar'
import Table from "react-bootstrap/Table";
import "./ArtistOrders.css"

function ArtistOrdrers() {
  return (
    <>
    
    <div className='artistorders'>
      <div className="row">
        <div className="col-2">
        <ArtistSidebar/>
        </div>

        <div class='col-10 orders' >
        

        <div className='orders-table'>
        <h1 className="mt-5 ms-3  ">Orders</h1>

        <Table
                striped
                bordered
                hover
                className="mt-5 ms-3"
                style={{ width: "100%" }}
              >
                <thead style={{ height: "50px" }}>
                  <tr>
                    <th>No</th>
                    <th>Work</th>
                    <th>User</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Delivery</th>
                    
                    
                  </tr>
                </thead>
                <tbody >
        
                      <tr >
                        <td>1</td>
                        <td>Work name</td>
                        <td>Lumiere</td>
                        <td>250</td>
                        <td>Fulfiled</td>
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

export default ArtistOrdrers