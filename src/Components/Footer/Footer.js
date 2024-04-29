import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";
import img from "../../Assets/Rectangle 16.png"
import "./Footer.css"

function Footer() {
    return (
        <div className='row footer'>

            <div className='footer-container col-6'>

                <div className='footer-content'>
                    <p>I've found some truly breathtaking pieces on <span>Museofire</span>. Its like having a personal art curator at my fingertips.</p>
                </div>
                <div className='footer-icons'>

                <Icon icon="emojione:star" className="staricon"/>
                <Icon icon="emojione:star" className="staricon"/>
                <Icon icon="emojione:star" className="staricon"/>
                <Icon icon="emojione:star" className="staricon"/>
                <Icon icon="emojione:star" className="staricon"/>

                </div>

                <div className='footer-artistname'>
                    <span>David Lee</span> , Art Lover
                </div>

                <div className='footer-links'>

                    {/* <p><Link>Home</Link></p>
                    <p><Link>About</Link></p>
                    <p><Link>Gallery</Link></p> */}

                </div>

                <div className='footer-logo'>

                <Icon icon="dashicons:art" className="iconlogo"/>

                    <p>Museofire</p>
                </div>

            </div>

                <div className='footer-cont2 col-6'>
                <div className='footer-image'>
                    <p>Art of the Day</p>
                <img src={img} alt='painting'/>
            </div>

            <div className='footer-credits'>
               <p><span>Museofire</span> 2034 all rights recieved </p> 
            </div>
                </div>

          

        </div>
    )
}

export default Footer