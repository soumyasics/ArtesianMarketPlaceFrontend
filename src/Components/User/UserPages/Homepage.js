import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import Usernav from "../../Navbar/Usernav"
import naviimg from "../../../Assets/homie.jpg"
import Navbar from '../../Navbar/Navbar.js'

import doll from "../../../Assets/homie.jpg"
import woodlight1 from "../../../Assets/homie.jpg"
import brown from "../../../Assets/homie.jpg"
import elephant from "../../../Assets/homie.jpg"
import madha from "../../../Assets/homie.jpg"
import footer from "../../Footer/Footer.js"
import Footer from '../../Footer/Footer.js'
import axiosInstance from '../../../Schemas/BaseUrl.js'
import { Link } from 'react-router-dom'
import homeimg1 from "../../../Assets/homeimage2 (1).jpg"
import homeimg2 from "../../../Assets/homeimage2 (2).jpg"




function Homepage({url}) {

  const id=localStorage.getItem("userid")
  console.log(id);

const[art,setArt]=useState([])

useEffect(()=>{
  axiosInstance.post(`viewArtworks`)
  .then((res)=>{
    console.log(res);
    setArt(res.data.data)
  })
  .catch((err)=>{
    console.log(err);
  })

},[])


  return (
    <div>
      {id?(
        <Usernav url={url}/>
      ):(
        <Navbar url={url}/>
      )
      }
        <div class="card text-center">
        <img src={naviimg} className='homeimage' alt="..." />
        <div class="card-img-overlay"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <h5 class="card-title" className='cardtle'>Handmade with love</h5>
          <p class="card-text" className='cardtxt'>Love-infused crafts, from our heart</p><br></br>
          {id?(
          <Link to="/gallery" class="btn btn-primary" className='cardbtn'><b>Shop Now</b> </Link>
          ):(
            <Link to="/user_login" class="btn btn-primary" className='cardbtn'><b>Shop Now</b> </Link>

          )
}
        </div>
      </div><br></br><hr></hr><p className='headers'>Popular Items</p>


        
      <div class="container" className='container1'>
        <div class="row justify-content-center">
          <div class="col-12 col-md-10">
            <div class="row">



            {art.length ? (
                art.slice(0, 3).map((a) => {
                    return (
  
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <img src={`${url}/${a.file?.filename}`} class="card-img-top" className='cardimageset1' alt="..." width="300px" height="300px"/>
                  <div class="card-body">
                    <h5 class="card-title" id='cardtitile'>{a?.name}</h5>
                    <p class="card-text">₹{a?.price}</p></div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                   {id ? (
    <Link to={`/viewsinglework_art/${a._id}`} className='card-viewdetails'>view details</Link>
  ) : (
    <span className='card-viewdetails'>view details</span>
  )   }                 
  </small>
                  </div>
                  {/* <!-- Card 1 content --> */}
                </div>
              </div>

);
})
) : (
<div>No Works Available</div>
)}



            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className='headers'>New Paintings & Sketches</p>
      <div class="card mb-3" className='elephantcard'/*style="max-width: 540px;"*/>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={homeimg1} class="img-fluid rounded-start" className='elephantimg' alt="..."  />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Harmony in Branches Pencil Sketch</h5><br></br><br></br>
              <p class="card-text" className='elephantcardtext'>In "Harmony in Branches," the canvas sings with the vibrant hues of nature as two birds find solace within the embrace of a majestic tree. 
              Perched amidst lush foliage, the birds' plumage echoes the verdant landscape around them, blending s
              eamlessly with the emerald leaves.  As they chirp softly, their song resonates with the rustle of leaves, creating a symphony of harmony that envelops the observer in a peaceful embrace. The intricate details of each feather and leaf are masterfully captured, inviting the viewer to lose themselves in the tranquil beauty of the natural world. "Harmony in Branches" is more than just a painting; it's a timeless ode to the delicate balance and
               interconnectedness of all life forms within the vast tapestry of existence.
              </p>
              <p class="card-text"><small class="text-body-secondary">3 weeks ago</small></p>
            </div>
          </div>
        </div><br></br>

      </div>
      <div class="card mb-3" className='elephantcard'/*style="max-width: 540px;"*/>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={homeimg2} class="img-fluid rounded-start" className='elephantimg' alt="..."    />
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