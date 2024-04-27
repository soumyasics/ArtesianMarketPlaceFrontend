import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar';
import profileimage from "../../../Assets/aubrey-graham-photo-u164.jpg";
import "./AdminViewDeliveryAgentIndividual.css"
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../Schemas/BaseUrl';
import { toast } from 'react-toastify';

function AdminViewDeliveryAgentIndividual({url}) {

   const {id}=useParams()
   console.log({id});
   const[delivery,setDelivery]=useState({})

   useEffect(()=>{
      axiosInstance.post(`viewdeliveryById/${id}`)
      .then((res)=>{
          console.log(res);
          setDelivery(res.data.data)
          
      })
      .catch((err)=>{
          console.log(err);
      })
  },[])
  const navigate=useNavigate()
  const deletefn=(()=>{
   axiosInstance.post(`deletedeliveryById/${id}`)
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


<h1>Delivery Agent</h1>
<div className='text-center'>
<img src={`${url}/${delivery.licence?.filename}`} alt='Profile Photo'  width="350px" height="190px"/>
</div>
{/* <div className='artistprofile-img'> */}
{/* <div className='artistphoto'> */}
   {/* <img src={profileimage} alt='Profile Photo' /> */}
{/* </div> */}
{/* <div className='artistname'>Lumiere</div>
<div className='artistprofile-text'><p>Delivery Agent</p></div> */}
{/* </div> */}

{/* <div className='artistprofile-content'>
<p>Lumière canvases are explosions of color, a vibrant dance of emotions poured onto the surface. Inspired by the chaos and beauty of the urban landscape, she uses bold strokes and gestural movements to capture the fleeting energy of life. Every piece is an invitation to lose yourself in the rhythm of color and find your own story within the abstract.
</p>
</div> */}

<div className=' artistprofile-details '>

<div className='row'>

<div className='detailsbar col-6'>
   
   
<div className='artistprofileinput '><p>Name : {delivery?.firstname} {delivery?.lastname} </p></div>
<div className='artistprofileinput '><p>Aadhar : {delivery?.aadhar}</p></div>
<div className='artistprofileinput '><p>Email : {delivery?.email}</p></div>
</div>

<div className='detailsbar-2 col-6'>
<div className='artistprofileinput '><p>Age : {delivery?.age}</p></div>
<div className='artistprofileinput '><p>Contact  : {delivery?.contact}</p></div>
</div>

<div row>
   <div className='col-12'>
   <div className='artistprofileinput2 '><p>Address : {delivery?.housename} {delivery?.city} {delivery?.district} {delivery?.pincode} </p></div>
   </div>
</div>

<div className='adminremoveagentbtn '>
   <button onClick={deletefn}>Remove Account</button>
</div>


</div>



</div>

</div>

   </div>
   </div>
</div>
  )
}

export default AdminViewDeliveryAgentIndividual