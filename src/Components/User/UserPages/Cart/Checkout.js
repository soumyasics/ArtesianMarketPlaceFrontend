import React from 'react'
import "./Checkout.css"
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import artistimg from "../../../../Assets/aubrey-graham-photo-u164.jpg"
import Usernav from '../../../Navbar/Usernav'
import { useNavigate } from 'react-router-dom'
import NavMain from '../../../Navbar/NavMain'


function Checkout() {
   const navigate = useNavigate()

   const clickFn = ()=>{
    navigate("/order_confirmed")
   }
  return (
    <>
    <NavMain/>

    <section className='Cover-img'>
        <h1>CHECK OUT</h1>
      </section>

     <div className='Checkout'>
<h1>CHECKOUT</h1>
<p>YOU CAN CHECKOUT AND PAY</p>
<div className='upi-input'>
    <input type='text' placeholder='UPI ID'/>
</div>
<div className='checkoutbtn'>

    <div className='upibtn'>
    <button>PAY WITH UPI</button>
    </div>
    <div className='codbtn'>
    <button onClick={clickFn}>CASH ON DELIVERY</button>
    </div>
    
</div>



     </div>

     <section id="featured-artist">

<h1>Featured Artist</h1>
<h2>We provide the tools and support to help your artistic compass guide you.</h2>


<div className='featured-artist-details'>
    <div className='featured-artistimg'>
        <img src={artistimg} alt='artist image' />

        <h1>Lumiere</h1>

    </div>
    <div className='featured-artistimg'>
        <img src={artistimg} alt='artist image' />

        <h1>Lumiere</h1>

    </div>
    <div className='featured-artistimg'>
        <img src={artistimg} alt='artist image' />

        <h1>Lumiere</h1>

    </div>
    <div className='featured-artistimg'>
        <img src={artistimg} alt='artist image' />

        <h1>Lumiere</h1>

    </div>
</div>


</section>
    
     <Footer/>
    </>
   
  )
}

export default Checkout