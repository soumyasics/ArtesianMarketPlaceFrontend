import React from 'react'
import "./Gallery.css"
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
import product from "../../../../Assets/Rectangle 12.png"
import { Icon } from "@iconify/react";
import artistimg from "../../../../Assets/aubrey-graham-photo-u164.jpg"
import Usernav from '../../../Navbar/Usernav'
import NavMain from '../../../Navbar/NavMain'
import { Link } from 'react-router-dom'
function Gallery() {
  return (
    <>
      <NavMain />


      <section className='Cover-img'>
        <h1>Gallery</h1>
      </section>


      <div className='gallery'>

        <h1>SEARCH</h1>

        <div className='gallery-search'>

          <input type='text' placeholder='Work Name / Artist Name' />
          <button>Search</button>

        </div>

        <div className='explore-gallery'>
          <h1>EXPLORE GALLERY</h1>
          <p>Dive into a vibrant ocean of creativity. <span>Museofire</span>, passionate artists meet art lovers seeking the extraordinary.
          </p>
          <div className='gallery-products'>

            <div class="container text-center">
              <div class="row gallery-row">

                <div class="col-6 gallery-col" >


                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>



                    <div class="artdesc">
                      <div className='productdet'>
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>
                            ADD TO CART
                          </button>
                        </h3>
                      </div>

                      <div className='product-pricetag'>
                        <h1> ₹ 500 </h1>

                      </div>



                      <Link to="/user_chat" >
                        <div className='gallery-artistprofile'>
                          <img src={artistimg} />
                        </div>
                      </Link>



                      <div className='gallery-chat-icon'><Link to="/user_chat"> <Icon icon="fluent:chat-32-filled" className="gallery-chat" /> </Link></div>
                    </div>

                  </div>







                </div>
                <div class="col-6 gallery-col" >


                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>



                    <div class="artdesc">
                      <div className='productdet'>
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>
                            ADD TO CART
                          </button>
                        </h3>
                      </div>

                      <div className='product-pricetag'>
                        <h1> ₹ 500 </h1>

                      </div>



                      <Link to="/user_chat" >
                        <div className='gallery-artistprofile'>
                          <img src={artistimg} />
                        </div>
                      </Link>



                      <div className='gallery-chat-icon'><Link to="/user_chat"> <Icon icon="fluent:chat-32-filled" className="gallery-chat" /> </Link></div>
                    </div>

                  </div>







                </div>
                <div class="col-6 gallery-col" >


                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>



                    <div class="artdesc">
                      <div className='productdet'>
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>
                            ADD TO CART
                          </button>
                        </h3>
                      </div>

                      <div className='product-pricetag'>
                        <h1> ₹ 500 </h1>

                      </div>



                      <Link to="/user_chat" >
                        <div className='gallery-artistprofile'>
                          <img src={artistimg} />
                        </div>
                      </Link>



                      <div className='gallery-chat-icon'><Link to="/user_chat"> <Icon icon="fluent:chat-32-filled" className="gallery-chat" /> </Link></div>
                    </div>

                  </div>







                </div>
                <div class="col-6 gallery-col" >


                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>



                    <div class="artdesc">
                      <div className='productdet'>
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>
                            ADD TO CART
                          </button>
                        </h3>
                      </div>

                      <div className='product-pricetag'>
                        <h1> ₹ 500 </h1>

                      </div>



                      <Link to="/user_chat" >
                        <div className='gallery-artistprofile'>
                          <img src={artistimg} />
                        </div>
                      </Link>



                      <div className='gallery-chat-icon'><Link to="/user_chat"> <Icon icon="fluent:chat-32-filled" className="gallery-chat" /> </Link></div>
                    </div>

                  </div>







                </div>
                <div class="col-6 gallery-col" >


                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>



                    <div class="artdesc">
                      <div className='productdet'>
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>
                            ADD TO CART
                          </button>
                        </h3>
                      </div>

                      <div className='product-pricetag'>
                        <h1> ₹ 500 </h1>

                      </div>



                      <Link to="/user_chat" >
                        <div className='gallery-artistprofile'>
                          <img src={artistimg} />
                        </div>
                      </Link>



                      <div className='gallery-chat-icon'><Link to="/user_chat"> <Icon icon="fluent:chat-32-filled" className="gallery-chat" /> </Link></div>
                    </div>

                  </div>







                </div>
                <div class="col-6 gallery-col" >


                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>



                    <div class="artdesc">
                      <div className='productdet'>
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>
                            ADD TO CART
                          </button>
                        </h3>
                      </div>

                      <div className='product-pricetag'>
                        <h1> ₹ 500 </h1>

                      </div>



                      <Link to="/user_chat" >
                        <div className='gallery-artistprofile'>
                          <img src={artistimg} />
                        </div>
                      </Link>



                      <div className='gallery-chat-icon'><Link to="/user_chat"> <Icon icon="fluent:chat-32-filled" className="gallery-chat" /> </Link></div>
                    </div>

                  </div>







                </div>
                <div class="col-6 gallery-col" >


                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>



                    <div class="artdesc">
                      <div className='productdet'>
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>
                            ADD TO CART
                          </button>
                        </h3>
                      </div>

                      <div className='product-pricetag'>
                        <h1> ₹ 500 </h1>

                      </div>



                      <Link to="/user_chat" >
                        <div className='gallery-artistprofile'>
                          <img src={artistimg} />
                        </div>
                      </Link>



                      <div className='gallery-chat-icon'><Link to="/user_chat"> <Icon icon="fluent:chat-32-filled" className="gallery-chat" /> </Link></div>
                    </div>

                  </div>







                </div>
                <div class="col-6 gallery-col" >


                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>



                    <div class="artdesc">
                      <div className='productdet'>
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>
                            ADD TO CART
                          </button>
                        </h3>
                      </div>

                      <div className='product-pricetag'>
                        <h1> ₹ 500 </h1>

                      </div>



                      <Link to="/user_chat" >
                        <div className='gallery-artistprofile'>
                          <img src={artistimg} />
                        </div>
                      </Link>



                      <div className='gallery-chat-icon'><Link to="/user_chat"> <Icon icon="fluent:chat-32-filled" className="gallery-chat" /> </Link></div>
                    </div>

                  </div>







                </div>



              </div>
            </div>

          </div>
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

export default Gallery