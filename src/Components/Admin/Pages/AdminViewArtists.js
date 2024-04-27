import React, { useEffect, useState } from 'react'
import AdminSidebar from '../AdminSidebar'
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import "./AdminViewArtist.css"
import { Link } from 'react-router-dom';
import axiosInstance from '../../../Schemas/BaseUrl';



function AdminViewArtists() {
  const[artist,setArtist]=useState([])
  useEffect(()=>{
    axiosInstance.post(`viewArtists`)
    .then((res)=>{
      console.log(res);
      setArtist(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Place</th>
                    {/* <th>Delivery</th> */}
                    <th>View More</th>
                   
                    
                    
                  </tr>
                </thead>
                <tbody >
                {artist ? (
  artist.length ? (
    artist.map((a,index) => {
      // const serialNumber = index + 1;
         return( 

        
                      <tr >
                        <td>{index+1}</td>
                        <td>{a?.firstname}</td>
                        <td>{a?.email}</td>
                        <td>{a?.contact}</td>
                        {/* <td>Status</td> */}
                        <td>{a?.city}</td>
                        <td><Link to={`/Admin_viewartistindividual/${a._id}`}>click here for further details...</Link></td>
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
  )
}

export default AdminViewArtists