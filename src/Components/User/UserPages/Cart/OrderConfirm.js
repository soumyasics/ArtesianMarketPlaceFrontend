import React from 'react'
import "./OrderConfirm.css"
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import Usernav from '../../../Navbar/Usernav'
import NavMain from '../../../Navbar/NavMain'

function OrderConfirm() {
  return (
    <>
      <NavMain/>

      <section className='Cover-img'>
        <h1>Thank You For Your Order</h1>
      </section>

      <div className='OrderConfirm'>
        <h1>We have received the order for Product Name</h1>
<h3>The order is ready to be picked up at:</h3>
<p>Address</p>
<p>Place</p>
<p>City</p>
<p>Pin code</p>
<p>Kerala</p>
<p>India</p>

<div className='orderconfirmbtn'>
  <button>Mark as read</button>
</div>




        
      </div>
      <Footer />
    </>
  )
}

export default OrderConfirm