import React, { useEffect, useState } from 'react'
import "./Dasshboard.css"
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import Usernav from '../../../Navbar/Usernav'
import NavMain from '../../../Navbar/NavMain'
import axiosInstance from '../../../../Schemas/BaseUrl'

function Dashboard({url}) {
  const userid=localStorage.getItem("userid")
  console.log(userid);
  const[order,setOrder]=useState([])
  useEffect(()=>{
    axiosInstance.post(`vieworderByUserid/${userid}`)
    .then((res)=>{
      console.log(res);
      setOrder(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
      <NavMain url={url}/>

      <section className='Cover-img'>
        <h1>Dashboard</h1>
      </section>

      <div className='Dashboard'>
        <h1>Orders</h1>
        <div className='delivery-schedule'>

          <table width={"100%"} className='deliverytable'>
            <thead >
              <tr >
                <th width={"23.5%"}>Date (order)</th>
                <th width={"23.5%"}>Exp (Delivery)</th>
                <th width={"23.5%"}>Delivery Agent Name and Contact</th>
                <th width={"23.5%"}>Status</th>
                <th width={"23.5%"}>Price</th>
              </tr>
            </thead>
            <tbody>
            {order && order.length ? (
                  order.map((a) => {
                    const dateTime = new Date(a?.date);
                    const dateOnly = dateTime.toISOString().split("T")[0];

//                     const dateParts = a.expectedDeliveryDate.split('/');
// const dateObject = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
              
                    return (


              <tr>
                <td>{dateOnly}</td>
                <td>{a.expectedDeliveryDate}</td>
                <td id="bold"> {a.deliveryId ? `${a.deliveryId.firstname}, ${a.deliveryId.contact}` : 'Order not picked up'} </td>
                <td id='delivered'>{a?.deliveryStatus}</td>
                <td id="bold"><span>₹</span> {a?.artid?.price} </td>
              </tr>
                                  );
                                })
                              ) : (
                                <div>No Works Available</div>
                              )}
              

            </tbody>
          </table>
        </div>

        {/* <div className='dashboard-msgshipper'>
          <h2>Message Shipper</h2>

          <div className='dashboard-form'>
            <select>
              <option selected>Select One</option>
            </select>
          </div>

          <div className='dashboard-form'>
            <textarea placeholder='Message' />
          </div>
<div className='dashboard-button'>
<button>Submit</button>
</div>
         


        </div> */}

      </div>
      <Footer />
    </>
  )
}

export default Dashboard