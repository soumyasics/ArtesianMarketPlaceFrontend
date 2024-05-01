import React, { useEffect, useState } from "react";
import "./Cart.css";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import itemimg from "../../../../Assets/Rectangle 12.png";
import artistimg from "../../../../Assets/aubrey-graham-photo-u164.jpg";
import { Icon } from "@iconify/react";
import Usernav from "../../../Navbar/Usernav";
import { useNavigate } from "react-router-dom";
import NavMain from "../../../Navbar/NavMain";
import axiosInstance from "../../../../Schemas/BaseUrl";
import { toast } from "react-toastify";

function Cart({ url }) {
  const navigate = useNavigate();

  const submitFn = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  const userid = localStorage.getItem("userid");
  console.log(userid);

  const [art, setArt] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewCartByUserid/${userid}`)
      .then((res) => {
        console.log(res);
        setArt(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'relative',
    animation: 'blink 1s infinite', 
    transition: 'background-color 0.3s ease',
  };

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const calculateTotalPrice = () => {
      let sum = 0;
      art?.forEach((a) => {
        sum += a?.artid?.price || 0; 
      });
      setTotalPrice(sum); 
    };

    calculateTotalPrice();
  }, [art]);


  const removecartfn=((itemid)=>{
    axiosInstance.post(`deleteCartById/${itemid}`)
    .then((res)=>{
      if(res.data.status==200){
        toast.success("Item removed successfully")
        window.location.reload()
      }
    })
    .catch=((err)=>{
      console.log(err);
    })
  })

  return (
    <>
      <NavMain url={url} />
      <section className="Cover-img">
        <h1>Cart</h1>
      </section>

      <div className="Cart">
        <h1>CART</h1>
        <p>
          Dive into a vibrant ocean of creativity. Musefire, passionate artists
          meet art lovers seeking the extraordinary.
        </p>

        <div className="cart-items">
          <div className="delivery-schedule">
            <table width={"100%"} className="cart-table">
              <thead>
                <tr>
                  <th width={"90%"}>ITEM</th>
                  {/* <th width={"40%"}>QTY</th> */}
                  <th width={"30%"}>PRICE</th>
                  <th width={"30%"}></th>
                </tr>
              </thead>
              <tbody>
                {art && art.length ? (
                  art.map((a) => {
                    return (
                      <tr>
                        <td id="cartitemscolb">
                          <img
                            src={`${url}/${a?.artid?.file?.filename}`}
                            alt="item-img"
                          />
                          <h3>{a?.artid?.name}</h3>
                        </td>
                        <td id="bold">
                          <span>₹</span>
                          {a?.artid?.price}
                        </td>
                        <td id="bold">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            style={buttonStyle}
                            onClick={()=>{removecartfn(a._id)}}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div>No Works Available</div>
                )}

                {/* <tr>
                  <td id="cartitemscolb"><img src={itemimg} alt='item-img' /><h3>Lumiere</h3></td>
                  <td id='bold'><span>₹</span>1000</td>
                </tr> */}
              </tbody>
            </table>

            <div className="cart-grandtotal">
              <h4>
                <span id="total">GRAND TOTAL</span> &nbsp;
                <span id="rupees">₹</span>{totalPrice}
              </h4>
            </div>
          </div>
        </div>

        <div className="itemdelivery">
          <input type="checkbox" />
          <label>Need Delivery</label>
        </div>

        <div className="cart-shipping-address">
          <h1>ENTER SHIPPING DETAILS</h1>
          <p>
            We provide the tools and support to help your artistic compass guide
            you.
          </p>

          <form onSubmit={submitFn}>
            <div className="cart-input">
              <input type="text" placeholder="ADDRESS" />
            </div>

            <div className="cart-input">
              <input type="text" placeholder="PINCODE" />
            </div>

            <div className="cart-input">
              <input type="text" placeholder="PHONE NUMBER" />
            </div>

            <div className="cart-input">
              <input type="text" placeholder="STATE" />
            </div>

            <div className="cart-input">
              <input type="text" placeholder="COUNTRY" />
            </div>

            <div className="cart-btn">
              <button type="submit">CHECKOUT</button>
            </div>
          </form>
        </div>

        {/* <section id="featured-artist">

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


</section> */}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
