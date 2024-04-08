import React from 'react'
import profileimage from "../../../Assets/aubrey-graham-photo-u164.jpg"
import AdminSidebar from '../AdminSidebar'
function AdminViewArtistIndividual() {
  return (
    <div>
    <div className="row">
   <div className="col-2">
   <AdminSidebar/>
   </div>

   <div class='col-10 artistProfile' >
       
   <div className='artistProfilepage'>


<h1>PROFILE</h1>


<div className='artistprofile-img'>
<div className='artistphoto'>
   <img src={profileimage} alt='Profile Photo' />
</div>
<div className='artistname'>Lumiere</div>
<div className='artistprofile-text'><p>Artist</p></div>
</div>

<div className='artistprofile-content'>
<p>Lumière canvases are explosions of color, a vibrant dance of emotions poured onto the surface. Inspired by the chaos and beauty of the urban landscape, she uses bold strokes and gestural movements to capture the fleeting energy of life. Every piece is an invitation to lose yourself in the rhythm of color and find your own story within the abstract.
</p>
</div>

<div className=' artistprofile-details '>

<div className='row'>

<div className='detailsbar col-6'>
   
   
<div className='artistprofileinput '><p>Name : Lumiere</p></div>
<div className='artistprofileinput '><p>DOB : 30-12-1999</p></div>
<div className='artistprofileinput '><p>Email : adarshajith24@gmail.com</p></div>
</div>

<div className='detailsbar-2 col-6'>
<div className='artistprofileinput '><p>Age : 24</p></div>
<div className='artistprofileinput '><p>Contact number : 9074018563</p></div>
</div>

<div row>
   <div className='col-12'>
   <div className='artistprofileinput2 '><p>Address : Kottil veedu kavanadu kollam </p></div>
   <div className='artistprofileinput2 '><p>Pickup Address : Kottil veedu kavanadu kollam </p></div>
   </div>
</div>


</div>



</div>

</div>

   </div>
   </div>
</div>
  )
}

export default AdminViewArtistIndividual