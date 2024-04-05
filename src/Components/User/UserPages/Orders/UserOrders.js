import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import itemimg from "../../../../Assets/Rectangle 12.png"
import { Icon } from "@iconify/react";
import "./UserOrders.css"
import Usernav from '../../../Navbar/Usernav';
import NavMain from '../../../Navbar/NavMain';


function UserOrders() {
  return (
    <>
    <NavMain/>
    <div className='user-orders'>
    <section className='Cover-img'>
      <h1>Orders</h1>
    </section>

    <div className='Cart'>

      <h1>Orders</h1>
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
                <td id='bold'>2</td>
                <td id='bold'><span>₹</span>100</td>
              </tr>
              <tr>
                <td id="cartitemscolb"><img src={itemimg} alt='item-img' /><h3>Lumiere</h3></td>
                <td id='bold'>5</td>
                <td id='bold'><span>₹</span>1000</td>
              </tr>

            </tbody>
          </table>

          <div className='cart-grandtotal'>
            <h4><span id="total">GRAND TOTAL</span> &nbsp;<span id='rupees'>₹</span>1100</h4>
          </div>



        </div>

      </div>

    

    </div>
    </div>
   
    <Footer/>
  </>
  )
}

export default UserOrders