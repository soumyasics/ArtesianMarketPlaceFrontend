import React from 'react'
import "./ViewArtists.css"
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import artistimg from "../../../../Assets/aubrey-graham-photo-u164.jpg"
import { Icon } from "@iconify/react";
import Usernav from '../../../Navbar/Usernav'
import { Link } from 'react-router-dom'
import NavMain from '../../../Navbar/NavMain'

function ViewArtists({url}) {
    return (
        <>
            <NavMain url={url} />

            <section className='Cover-img'>
                <h1>Artists</h1>
            </section>

            <div className='ViewArtists'>
                <h1>Artists</h1>
                <p>We provide the tools and support to help your artistic compass guide you.</p>

                <div className='viewartists-list'>
                    <div className='row'>

                        
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                            <div className='viewartists-listimg col-3'>

                            <Link to="/view_artistworks">

                                <div className='viewartists-image'>
                                    <img src={artistimg} alt='artist image' />
                                </div>
                                <h1>Lumiere</h1>
                                
                                </Link>

                            </div>
                       


                    </div>

                </div>

           

            </div>
            <Footer />
        </>
    )
}

export default ViewArtists