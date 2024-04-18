import React, { useEffect, useState } from 'react'
import profileimage from "../../../Assets/aubrey-graham-photo-u164.jpg"
import AdminSidebar from '../AdminSidebar'
import "./AdminViewArtistIndividual.css"
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../../Schemas/BaseUrl'
import { toast } from 'react-toastify'
function AdminViewArtistIndividual({url}) {
      const {id}=useParams()
      console.log({id});

      const[artist,setArtist]=useState({})

      useEffect(()=>{
         axiosInstance.post(`viewArtistById/${id}`)
         .then((res)=>{
            console.log(res);
            setArtist(res.data.data)
         })
         .catch((err)=>{
            console.log(err);
         })
      },[])

      const dateOfBirth = new Date(artist.dob);

      const formattedDateOfBirth = `${dateOfBirth.getMonth() + 1}/${dateOfBirth.getDate()}/${dateOfBirth.getFullYear()}`;
  
      const ageInMilliseconds = Date.now() - dateOfBirth.getTime();
      const ageDate = new Date(ageInMilliseconds);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
      const navigate=useNavigate()

      const deletefn=(()=>{
         axiosInstance.post(`deleteArtistById/${id}`)
         .then((res)=>{
             if(res.data.status==200){
                 toast.success("Deleted Successfully")
                 navigate(-1)
             }
         })
         .catch((err)=>{
             toast.error("Cant Delete")
         })
     })
 


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
   <img src={`${url}/${artist.image?.filename}`} alt='Profile Photo' />
</div>
<div className='artistname'>{artist?.firstname} {artist?.lastname}</div>
<div className='artistprofile-text'><p>Artist</p></div>
</div>

<div className='artistprofile-content'>
{/* <p>Lumière canvases are explosions of color, a vibrant dance of emotions poured onto the surface. Inspired by the chaos and beauty of the urban landscape, she uses bold strokes and gestural movements to capture the fleeting energy of life. Every piece is an invitation to lose yourself in the rhythm of color and find your own story within the abstract.
</p> */}
</div>

<div className=' artistprofile-details '>

<div className='row'>

<div className='detailsbar col-6'>
   
   
<div className='artistprofileinput '><p>Name : {artist?.firstname} {artist?.lastname}</p></div>
<div className='artistprofileinput '><p>DOB : {formattedDateOfBirth}</p></div>
<div className='artistprofileinput '><p>Email : {artist?.email}</p></div>
</div>

<div className='detailsbar-2 col-6'>
<div className='artistprofileinput '><p>Age : {age}</p></div>
<div className='artistprofileinput '><p>Contact : {artist?.contact}</p></div>
</div>

<div row>
   <div className='col-12'>
   <div className='artistprofileinput2 '><p>Address : {artist?.housename} {artist?.city} {artist?.district} {artist?.pincode}  </p></div>
   {/* <div className='artistprofileinput2 '><p>Pickup Address : Kottil veedu kavanadu kollam </p></div> */}
   </div>
</div>


</div>



</div>

<div className='adminremovebtn '>
   <button onClick={deletefn}>Remove Account</button>
</div>

</div>

   </div>
   </div>
</div>
  )
}

export default AdminViewArtistIndividual