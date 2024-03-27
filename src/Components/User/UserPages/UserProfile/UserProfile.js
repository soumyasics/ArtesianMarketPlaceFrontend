import React from 'react'
import "./UserProfile.css"
import Navbar from '../../../Navbar/Navbar'
import profileimage from "../../../../Assets/aubrey-graham-photo-u164.jpg"
import Footer from '../../../Footer/Footer'

function UserProfile() {
    return (
        <>
            <Navbar/>
            <div className='UserProfile'>

                <section className='Cover-img'>
                    <h1>PROFILE</h1>
                </section>

                <div className='userprofile-img'>
                    <div className='userphoto'>
                        <img src={profileimage} alt='Profile Photo' />
                    </div>
                    <div className='username'>Lumiere</div>
                    <div className='userprofile-text'><p>User Profile</p></div>
                </div>

                <div className='userprofile-content'>
                    <p>Lumière canvases are explosions of color, a vibrant dance of emotions poured onto the surface. Inspired by the chaos and beauty of the urban landscape, she uses bold strokes and gestural movements to capture the fleeting energy of life. Every piece is an invitation to lose yourself in the rhythm of color and find your own story within the abstract.
                    </p>
                </div>

                <div className=' userprofile-details '>

                    <div className='row'>

                    <div className='detailsbar col-6'>
                        
                        
                    <div className='userprofileinput '><p>Name : Lumiere</p></div>
                    <div className='userprofileinput '><p>DOB : 30-12-1999</p></div>
                    <div className='userprofileinput '><p>Email : adarshajith24@gmail.com</p></div>
                    </div>

                    <div className='detailsbar-2 col-6'>
                    <div className='userprofileinput '><p>Age : 24</p></div>
                    <div className='userprofileinput '><p>Contact number : 9074018563</p></div>
                    </div>

                    <div row>
                        <div className='col-12'>
                        <div className='userprofileinput2 '><p>Address : Kottil veedu kavanadu kollam </p></div>
                        </div>
                    </div>
                    

                    </div>

                   <div className='userprofilebutton'> 
                    <button>SAVE</button>
                    <button>EDIT</button>
                   </div>
                    
                   </div>

            </div>
            <Footer/>
        </>
    )
}

export default UserProfile