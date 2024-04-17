import React from 'react'
import NavMain from '../../../Navbar/NavMain'
import workimg from "../../../../Assets/Rectangle 12.png"
import "./ViewSingleWork.css"
import { Icon } from "@iconify/react";
import Footer from '../../../Footer/Footer';
function ViewSingleWork() {
    return (
        <>
            <NavMain />
            <div className='user-orders'>
                <section className='Cover-img'>
                    <h1>Works</h1>
                </section>


                <div className='ViewSingleWork row' >
                    <div className='viewsingleworkimg col-6'>
                        <img src={workimg} />

                    </div>

                    <div className='viewsinglework-details col-6'>
                        <h1>Work Name</h1>
                        <h2>₹400</h2>

                        <div className='viewsingleworkbtn'>
                            <button> <Icon icon="ion:cart-outline" className="billingicon" /> ADD TO CART</button>

                        </div>
                        <div className='viewsingleworkbtn2'>
                            <button> <Icon icon="carbon:flash" className="billingicon" /> BUY NOW</button>

                        </div>


                    </div>


                </div>



            </div>
            <Footer />
        </>
    )
}

export default ViewSingleWork