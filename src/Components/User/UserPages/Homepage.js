import React from 'react'
import "./Homepage.css"
import Usernav from "../../Navbar/Usernav"
import naviimg from "../../../Assets/homie.jpg"

import doll from "../../../Assets/homie.jpg"
import woodlight1 from "../../../Assets/homie.jpg"
import brown from "../../../Assets/homie.jpg"
import elephant from "../../../Assets/homie.jpg"
import madha from "../../../Assets/homie.jpg"
import footer from "../../Footer/Footer.js"
import Footer from '../../Footer/Footer.js'




function Homepage({url}) {
  return (
    <div>
        <Usernav url={url}/>

        <div class="card text-center">
        <img src={naviimg} className='homeimage' alt="..." />
        <div class="card-img-overlay"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <h5 class="card-title" className='cardtle'>Handmade with love</h5>
          <p class="card-text" className='cardtxt'>Love-infused crafts, from our heart</p><br></br>
          <a href="#" class="btn btn-primary" className='cardbtn'><b>Shop Now</b> </a>
        </div>
      </div><br></br><hr></hr><p className='headers'>Popular Items</p>


        
      <div class="container" className='container1'>
        <div class="row justify-content-center">
          <div class="col-12 col-md-10">
            <div class="row">
                
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <img src={doll} class="card-img-top" className='cardimageset1' alt="..." width="300px" height="300px"/>
                  <div class="card-body">
                    <h5 class="card-title" id='cardtitile'>Thread Doll</h5>
                    <p class="card-text">₹100</p></div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      <a href='' className='card-viewdetails'>view details</a>
                    </small>
                  </div>
                  {/* <!-- Card 1 content --> */}
                </div>
              </div>


              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <img src={woodlight1} class="card-img-top" className='cardimageset1' alt="..." width="300px" height="300px" />
                  <div class="card-body">
                    <h5 class="card-title">Wooden lamp</h5>
                    <p class="card-text">₹500</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      <a href='' className='card-viewdetails'>view details</a>
                    </small>
                  </div>
                  {/* <!-- Card 2 content --> */}
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <img src={brown} class="card-img-top" className='cardimageset1' alt="..." width="300px" height="300px"/>
                  <div class="card-body">
                    <h5 class="card-title">Brown Painting</h5>
                    <p class="card-text">₹750</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary"><a href='' className='card-viewdetails'>view details</a></small>
                  </div>
                  {/* <!-- Card 3 content --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className='headers'>New Paintings & Sketches</p>
      <div class="card mb-3" className='elephantcard'/*style="max-width: 540px;"*/>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={elephant} class="img-fluid rounded-start" className='elephantimg' alt="..."  />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Elephant Pencil Sketch</h5><br></br><br></br>
              <p class="card-text" className='elephantcardtext'>This elephant sketch tells a story of beauty and wisdom. The artist used careful lines and shading to show the elephant's grace and strength. Look closely at its trunk and eyes—they hold the secrets of the wild. This drawing honors these amazing animals and invites us to imagine the jungle's wonders.</p>
              <p class="card-text"><small class="text-body-secondary">3 weeks ago</small></p>
            </div>
          </div>
        </div><br></br>

      </div>
      <div class="card mb-3" className='elephantcard'/*style="max-width: 540px;"*/>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={madha} class="img-fluid rounded-start" className='elephantimg' alt="..."    />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Mother Mery Pencil Sketch</h5><br></br><br></br>
              <p class="card-text" className='elephantcardtext'>This pencil sketch of Mother Mary shows her calm and kind expression. The artist used light lines and shading to create a peaceful feeling. Looking at this sketch makes you feel comforted and hopeful.</p>
              <p class="card-text"><small class="text-body-secondary"> 3 mins ago</small></p>
            </div>
          </div>
        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default Homepage