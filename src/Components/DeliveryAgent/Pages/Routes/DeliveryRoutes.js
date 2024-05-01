import React, { useEffect, useState } from 'react'
import "./DeliveryRoutes.css"
import DeliveryAgentSidebar from '../../DeliveryAgentSidebar'
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import axiosInstance from '../../../../Schemas/BaseUrl';
import { toast } from 'react-toastify';

function DeliveryRoutes() {
  const agentid=localStorage.getItem("deliveryid")
  console.log(agentid);

  const[delivery,setDelivery]=useState([])
  const [del,setDel]=useState({
    deliveryId:agentid,
    expectedDeliveryDate:""
  })

  useEffect(()=>{
    axiosInstance.post(`viewPendingOrdersForDelivery`)
    .then((res)=>{
      console.log(res);
      setDelivery(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })

  },[])

  const changefn=((e)=>{
    setDel({
      ...del,[e.target.name]:e.target.value
    })
  })

  const takedel=((deliveryId,agentid)=>{
    if (!del.expectedDeliveryDate) {
      toast.error("Please select a delivery date");
      return;
    }
  
    axiosInstance.post(`acceptorderByDeliverAgent/${deliveryId}`,del)
    .then((res)=>{
      console.log(res);
      if(res.data.status===200){
        toast.success("Delivery taken successfully")
        window.location.reload()
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  })


  return (
   <>
    <div className='DeliveryRoutes'>
    <div className="row">
        <div className="col-2">
        <DeliveryAgentSidebar/>
        </div>
        <div class='col-10 routes' >

<div className='Routes-table'>

<h1>Order Requests</h1>
        
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
                    <th>Excepted delivery date</th>
                    <th>Status</th>
                    {/* <th>Delivery</th> */}
                   
                    
                    
                  </tr>
                </thead>
                <tbody >
                {delivery && delivery.length ? (
                  delivery.map((a,index) => {
                    return (
                      <tr >
                        <td>{index+1}</td>
                        <td>{a?.artid?.name}</td>
                        <td>{a?.artistId?.housename}, {a?.artistId?.city} , {a?.artistId?.district}
                        </td>
                        <td>{a?.userid?.housename}, {a?.userid?.city} , {a?.userid?.district}</td>
                        <td>
                          <input type='date'    min={new Date().toISOString().split('T')[0]} name='expectedDeliveryDate' value={del.expectedDeliveryDate} onChange={changefn}/>
                        </td>
                        <td id="routes-accept">
                          <button type='submit'   onClick={()=>{takedel(a._id,agentid)}}>Accept Delivery</button>
                        
                        </td>
                        {/* <td>Dtdc</td> */}
                      </tr>
                                          );
                                        })
                                      ) : (
                                        <div>No Works Available</div>
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

export default DeliveryRoutes