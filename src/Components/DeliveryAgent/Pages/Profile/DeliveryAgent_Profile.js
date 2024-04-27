import React, { useEffect, useState } from 'react';
import profileimage from "../../../../Assets/aubrey-graham-photo-u164.jpg"
import DeliveryAgentSidebar from '../../DeliveryAgentSidebar';
import axiosInstance from '../../../../Schemas/BaseUrl';
import { toast } from 'react-toastify';

function DeliveryAgent_Profile() {
   const deliveryid=localStorage.getItem("deliveryid")
   console.log(deliveryid+"deliveryid");

   const[data,setData]=useState({})
   const [editmode, setEditMode] = useState(false);
   const [editedProfile, setEditedProfile] = useState({
      firstname:"",
      lastname:"",
      housename:"",
      email:"",
      city:"",
      pincode:"",
      contact:"",
      district:"",
      age:"",
      aadhar:""
  });



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
      setEditedProfile({
         firstname: data.firstname,
         lastname: data.lastname,
         housename: data.housename,
         email: data.email,
         city: data.city,
         pincode: data.pincode,
         contact: data.contact,
         district: data.district,
         age: data.age,
         aadhar:data.aadhar
         
     });

      setEditMode(true)
   }
   const handleChange = (e) => {
      if (e.target.type === 'file') {
          const file = e.target.files[0];
          setEditedProfile({ ...editedProfile, [e.target.name]: file });
      } else {
          setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
      }
  };
  console.log(editedProfile);
  const handleSave = () => {

   if (editedProfile.contact.toString().length !== 10) {
       toast.warning("Contact number must be a 10-digit number");
       return;
     }
     if (editedProfile.pincode.toString().length !== 6) {
       toast.warning("Pincode number must be a 6-digit number");
       return;
     }
     if (editedProfile.age <=0 || editedProfile.age > 200) {
      toast.warning("Please enter proper age");
      return;
    }
    if (editedProfile.aadhar.toString().length !== 12) {
      toast.warning("aadhar number must be a 12-digit number");
      return;
    }
 
   axiosInstance.post(`editdeliveryById/${deliveryid}`, editedProfile, {
       headers: {
         "Content-Type": "multipart/form-data",
       },})
       .then((res) => {
           console.log(res);
           toast.success("Updated Succesfully")
           setData(editedProfile);
           setEditMode(false);
         //   window.location.reload()
           
       })
       .catch((err) => {
           console.log(err);
       });
};


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
{editmode? <input type='text' name='firstname' value={editedProfile.firstname} onChange={handleChange}/>:  data?.firstname} 
{editmode? <input type='text' style={{width:"120px"}} name="lastname" value={editedProfile.lastname} onChange={handleChange}/>: data?.lastname}  
 </p></div>
<div className='artistprofileinput '><p>Aadhar :
    {editmode?<input type='number' name='aadhar' value={editedProfile.aadhar} onChange={handleChange}/> : data?.aadhar}
    </p></div>
<div className='artistprofileinput '><p>Email : 
   {editmode?<input type='email' name='email' value={editedProfile.email} onChange={handleChange}/>: data?.email}
   </p></div>
</div>

<div className='detailsbar-2 col-6'>
<div className='artistprofileinput '><p>Age :
    {editmode?<input type='text' name='age' value={editedProfile.age} onChange={handleChange}/>: data?.age}
    </p></div>
<div className='artistprofileinput '><p>Contact number :
    {editmode?<input type='number' name='contact' value={editedProfile.contact} onChange={handleChange}/>: data?.contact}
    </p></div>
</div>

<div row>
   <div className='col-12'>
   <div className='artistprofileinput2 '><p>Address :
       {editmode?<input type='text' name='housename' value={editedProfile.housename} onChange={handleChange}/>: data?.housename} &nbsp;
        {editmode?<input type='text' name='city' value={editedProfile.city} onChange={handleChange}/>: data?.city}&nbsp;
         {editmode?<input type='text' name='district' value={editedProfile.district} onChange={handleChange}/>: data?.district}&nbsp;
           {editmode?<input type='number' name='pincode' value={editedProfile.pincode} onChange={handleChange} style={{marginLeft:"65px"}}/>: data?.pincode}
       </p></div>
   </div>
</div>


</div>

<div className='artistprofilebutton'> 
{editmode ?( <button onClick={handleSave}>SAVE</button>)
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