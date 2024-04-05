import React from 'react'
import "./Cart.css"
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import itemimg from "../../../../Assets/Rectangle 12.png"
import artistimg from "../../../../Assets/aubrey-graham-photo-u164.jpg" 
import { Icon } from "@iconify/react";
import Usernav from '../../../Navbar/Usernav'
import { useNavigate } from 'react-router-dom'
import NavMain from '../../../Navbar/NavMain'


function Cart() {
 const  navigate = useNavigate()

  const submitFn = (e)=>{
e.preventDefault();
    navigate("/checkout")
  }

  return (
    <>
      <NavMain/>
      <section className='Cover-img'>
        <h1>Cart</h1>
      </section>

      <div className='Cart'>

        <h1>CART</h1>
        <p>Dive into a vibrant ocean of creativity. Musefire, passionate artists meet art lovers seeking the extraordinary.
        </p>

        <div className='cart-items'>
          <div className='delivery-schedule'>

            <table width={"100%"} className='cart-table'>
              <thead >
                <tr >
                  <th width={"75%"}>ITEM</th>
                  <th width={"40%"}>QTY</th>
                  <th width={"40%"}>PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="cartitemscolb"><img src={itemimg} alt='item-img' /><h3>Lumiere</h3></td>
                  <td id='bold'><Icon icon="clarity:minus-line" className="add"/>&nbsp;1&nbsp;<Icon icon="clarity:plus-line" className="add"/></td>
                  <td id='bold'><span>₹</span>100</td>
                </tr>
                <tr>
                  <td id="cartitemscolb"><img src={itemimg} alt='item-img' /><h3>Lumiere</h3></td>
                  <td id='bold'><Icon icon="clarity:minus-line" className="add"/>&nbsp;10&nbsp;<Icon icon="clarity:plus-line" className="add"/></td>
                  <td id='bold'><span>₹</span>1000</td>
                </tr>

              </tbody>
            </table>

            <div className='cart-grandtotal'>
              <h4><span id="total">GRAND TOTAL</span> &nbsp;<span id='rupees'>₹</span>1100</h4>
            </div>



          </div>

        </div>

        <div className='itemdelivery'>
          <input type="checkbox" /><label>Need Delivery</label>
        </div>

        <div className='cart-shipping-address'>
          <h1>ENTER SHIPPING DETAILS</h1>
          <p>We provide the tools and support to help your artistic compass guide you.</p>

          <form onSubmit={submitFn}>

          <div className='cart-input'>
            <input type="text" placeholder='ADDRESS'/>          
          </div>
          

          <div className='cart-input'>
            <input type="text" placeholder='PINCODE'/>          
          </div>

          <div className='cart-input'>
            <input type="text" placeholder='PHONE NUMBER'/>          
          </div>

          <div className='cart-input'>
            <input type="text" placeholder='STATE'/>          
          </div>

          <div className='cart-input'>
            <input type="text" placeholder='COUNTRY'/>          
          </div>


<div className='cart-btn'>
  <button type='submit'>CHECKOUT</button>
</div>

 </form>
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

      </div>
      <Footer />
    </>

  )
}

export default Cart