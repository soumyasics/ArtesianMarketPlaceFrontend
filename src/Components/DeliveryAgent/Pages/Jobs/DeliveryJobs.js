import React from 'react'
import "./DeliveryJobs.css"
import DeliveryAgentSidebar from '../../DeliveryAgentSidebar'
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";


function DeliveryJobs() {
  return (
    <>
      <div className='DeliveryJobs'>
        <div className="row">
          <div className="col-2">
            <DeliveryAgentSidebar />
          </div>
          <div class='col-10 jobs' >

            <div className='jobs-table'>

              <h1>Jobs</h1>

              <Table
                striped
                bordered
                hover
                className="mt-5 ms-3"
                style={{ width: "100%" }}
              >
                <thead style={{ height: "50px" }}>
                  <tr>
                    <th style={{ width: "200px" }}>SL</th>
                    <th style={{ width: "200px" }}>Order</th>
                    <th style={{ width: "200px" }}>From</th>
                    <th style={{ width: "200px" }}>To</th>
                    <th style={{ width: "200px" }}>Status</th>
                    <th style={{ width: "200px" }}>Pickup Status</th>
                    <th style={{ width: "200px" }}>Drop Status</th>
                    <th style={{ width: "200px" }}>Complete Status</th>



                  </tr>
                </thead>
                <tbody style={{}}>

                  <tr >
                    <td>1</td>
                    <td className="veritical-center">Work name</td>
                    <td id='delivery-place'>Address line one
                      Address line two
                      Pleace
                      City
                      Pin code
                      Kerala
                      India</td>
                    <td id="delivery-place">Address line one
                      Address line two
                      Pleace
                      City
                      Pin code
                      Kerala
                      India</td>
                    <td id='status'>Accepted</td>
                    <td id="status-icon">Status &nbsp; <Icon icon="fa6-solid:truck-pickup" className="truckicon" />
                    <select >

                        <option>Status</option>
                        <option value='Picked Up'>Picked Up</option>
                        
                      </select>
                    </td>
                    <td id="status-icon">Status &nbsp;<Icon icon="solar:delivery-bold" className="deliveryicon" />
                    <select >
                        <option >Status</option>
                        <option value='Dropped'> Dropped</option>
                      </select>
                    </td>
                    <td id="status">Completd &nbsp;<Icon icon="fluent:cloud-sync-complete-16-filled" className="cloudicon" /></td>




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

export default DeliveryJobs