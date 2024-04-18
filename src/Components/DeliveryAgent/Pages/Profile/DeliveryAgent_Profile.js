import React, { useEffect, useState } from 'react';
import profileimage from "../../../../Assets/aubrey-graham-photo-u164.jpg"
import DeliveryAgentSidebar from '../../DeliveryAgentSidebar';
import axiosInstance from '../../../../Schemas/BaseUrl';

function DeliveryAgent_Profile() {
   const deliveryid=localStorage.getItem("deliveryid")
   console.log(deliveryid+"deliveryid");

   const[data,setData]=useState({})
   const [editmode, setEditMode] = useState(false);


   useEffect(()=>{
      axiosInstance.post(`viewdeliveryById/${deliveryid}`)
      .then((res)=>{
         console.log(res);
         setData(res.data.data)
      })
      .catch((err)=>{
         console.log(err);
      })
   },[])

   const  editmodefn =()=>{
      setEditMode(true)
   }


  return (
    <div>
    <div className="row">
   <div className="col-2">
   <DeliveryAgentSidebar/>
   </div>

   <div class='col-10 artistProfile' >
       
   <div className='artistProfilepage'>


<h1>DELIVERY AGENT PROFILE</h1>


<div className='artistprofile-img'>
 {/*<div className='artistphoto'>
      <img src={profileimage} alt='Profile Photo' />
</div> */}
<div className='artistname' style={{marginBottom:"200px"}}>{data?.firstname} {data?.lastname}</div>
{/* <div className='artistprofile-text'><p>Delivery Agent</p></div> */}
</div>

<div className='artistprofile-content' style={{paddingTop:"10rem"}}>
{/* <p>Lumière canvases are explosions of color, a vibrant dance of emotions poured onto the surface. Inspired by the chaos and beauty of the urban landscape, she uses bold strokes and gestural movements to capture the fleeting energy of life. Every piece is an invitation to lose yourself in the rhythm of color and find your own story within the abstract. */}
{/* </p> */}
</div>

<div className=' artistprofile-details '>

<div className='row'>

<div className='detailsbar col-6'>
   
   
<div className='artistprofileinput '><p>Name : 
{editmode? <input type='text'/>:  data?.firstname} 
{editmode? <input type='text' style={{width:"120px"}}/>: data?.lastname}  
 </p></div>
<div className='artistprofileinput '><p>Aadhar :
    {editmode?<input type='number'/> : data?.aadhar}
    </p></div>
<div className='artistprofileinput '><p>Email : 
   {editmode?<input type='email'/>: data?.email}
   </p></div>
</div>

<div className='detailsbar-2 col-6'>
<div className='artistprofileinput '><p>Age :
    {editmode?<input type='text'/>: data?.age}
    </p></div>
<div className='artistprofileinput '><p>Contact number :
    {editmode?<input type='number'/>: data?.contact}
    </p></div>
</div>

<div row>
   <div className='col-12'>
   <div className='artistprofileinput2 '><p>Address :
       {editmode?<input type='text'/>: data?.housename} &nbsp;
        {editmode?<input type='text'/>: data?.city}&nbsp;
         {editmode?<input type='text'/>: data?.district}&nbsp;
           {editmode?<input type='number' style={{marginLeft:"65px"}}/>: data?.pincode}
       </p></div>
   </div>
</div>


</div>

<div className='artistprofilebutton'> 
{editmode ?( <button>SAVE</button>)
   :
(
 <button onClick={editmodefn}>EDIT</button>)}
</div>

</div>

</div>

   </div>
   </div>
</div>
  )
}

export default DeliveryAgent_Profile