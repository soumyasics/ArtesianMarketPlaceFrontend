import React from 'react'
import "./Dasshboard.css"
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import Usernav from '../../../Navbar/Usernav'
import NavMain from '../../../Navbar/NavMain'

function Dashboard() {
  return (
    <>
      <NavMain />

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
                <th width={"23.5%"}>QTY</th>
                <th width={"23.5%"}>Status</th>
                <th width={"23.5%"}>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/11/2024</td>
                <td>13/12/2024</td>
                <td id="bold">1</td>
                <td id='delivered'>Check</td>
                <td id="bold"><span>₹</span> 500 </td>
              </tr>
              <tr>
                <td>12/11/2024</td>
                <td>13/12/2024</td>
                <td id="bold">1</td>
                <td id='delivered'>Check</td>
                <td id="bold"><span>₹</span> 500 </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='dashboard-msgshipper'>
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
         


        </div>

      </div>
      <Footer />
    </>
  )
}

export default Dashboard