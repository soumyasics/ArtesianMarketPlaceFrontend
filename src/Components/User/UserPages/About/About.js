import React from 'react'
import "./About.css"
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import images from "../../../../Assets/Rectangle 11.png"
import image2 from "../../../../Assets/Rectangleabout.png"
import image3 from "../../../../Assets/Rectangle 13.png"
import artistimg from "../../../../Assets/aubrey-graham-photo-u164.jpg"
import Usernav from '../../../Navbar/Usernav'
import NavMain from '../../../Navbar/NavMain'

function About() {
    return (
        <>
            <NavMain/>

            <section className='Cover-img'>
                <h1>About</h1>
            </section>

            <div className='About'>

                <h1>Where Art Blossoms and Flows</h1>
                <p>Where Art Blossoms and Flows
                    At Artesian Marketplace, we're not just an online platform, we're a passionate community where art is more than brushstrokes on canvas. It's a vibrant ecosystem teeming with creativity, a bridge between talented artists and art lovers yearning for the extraordinary.</p>
                <div className='aboutimg'>
                    <img src={images} alt="image" />
                </div>
                <div className='about-content'>
                    <p>We believe art shouldn't be confined to sterile galleries. It belongs in homes, hearts, and souls, igniting conversations, evoking emotions, and leaving a lasting mark on the world. That's why we cultivate a space where diverse voices can bloom, from emerging talents taking their first steps to established masters shaping the artistic landscape.</p>
                </div>

                <div className='aboutimg2'>

                    <img src={image2} alt="image" />
                    <img src={image3} alt="image" />

                </div>

                <div className='about-content2'>
                    <h1>Curated Excellence</h1>
                    <h2>We handpick exceptional artworks, ensuring every piece is a wave of inspiration and a testament to artistic mastery.</h2>
                    <p>Artist Empowerment: We provide the tools, resources, and support to help artists navigate their creative journey and thrive. Seamless Navigation: We prioritize safety and security, making transactions smooth and worry-free, from purchase to doorstep delivery. Global Connection: We bridge continents and cultures, fostering a community of art enthusiasts united by their passion for creativity..</p>
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
    )
}

export default About