import React, { useEffect, useState } from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import itemimg from "../../../../Assets/Rectangle 12.png"
import { Icon } from "@iconify/react";
import "./UserOrders.css"
import Usernav from '../../../Navbar/Usernav';
import NavMain from '../../../Navbar/NavMain';
import axiosInstance from '../../../../Schemas/BaseUrl';
import { toast } from 'react-toastify';


function UserOrders({url}) {
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

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const calculateTotalPrice = () => {
      let sum = 0;
      order?.forEach((a) => {
        sum += a?.artid?.price || 0; 
      });
      setTotalPrice(sum); 
    };

    calculateTotalPrice();
  }, [order]);

 const cancelorder=((orderid)=>{
    axiosInstance.post(`deleteOrderById/${orderid}`)
    .then((res)=>{
      console.log(res);
      if(res.data.status===200){
        toast.success("Removed Successfully")
        window.location.reload()
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  return (
    <>
    <NavMain url={url}/>
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
                <th width={"85%"}>ITEM</th>
                {/* <th width={"40%"}>QTY</th> */}
                <th width={"30%"}>PRICE</th>
                <th width={"40%"}></th>

              </tr>
            </thead>

            <tbody>

            {order && order.length ? (
                  order.map((a) => {
                    return (

              <tr>
                <td id="cartitemscolb"><img src={`${url}/${a?.artid?.file?.filename}`} alt='item-img' /><h3>{a?.artid?.name}</h3></td>
                {/* <td id='bold'>2</td> */}
                <td id='bold'><span>₹</span>{a?.artid?.price}</td>
                <td id='bold' ><button type='submit' className='btn btn-danger'
                onClick={()=>{cancelorder(a._id)}}
                >CancelOrder</button></td>
               
              </tr>
              
            );
          })
        ) : (
          <div>No Works Available</div>
        )}


            </tbody>
            
          </table>

          <div className='cart-grandtotal'>
            <h4><span id="total">TOTAL</span> &nbsp;<span id='rupees'>₹</span>{totalPrice}</h4>
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