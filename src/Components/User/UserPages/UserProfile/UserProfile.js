import React, { useEffect, useState } from 'react'
import "./UserProfile.css"
import Navbar from '../../../Navbar/Navbar'
import profileimage from "../../../../Assets/aubrey-graham-photo-u164.jpg"
import Footer from '../../../Footer/Footer'
import Usernav from '../../../Navbar/Usernav'
import NavMain from '../../../Navbar/NavMain'
import axiosInstance from '../../../../Schemas/BaseUrl'
import { toast } from "react-toastify";


function UserProfile({url}) {
    const userid=localStorage.getItem("userid")
    console.log(userid);
 
    const[data,setData]=useState({})
    const [editMode, setEditMode] = useState(false);
    const [editedProfile, setEditedProfile] = useState({
        firstname:"",
        lastname:"",
        housename:"",
        email:"",
        city:"",
        pincode:"",
        contact:"",
        district:"",
        dob:"",
        image:""
    });


    useEffect(()=>{
        axiosInstance.post(`viewUserById/${userid}`)
        .then((res)=>{
            console.log(res);
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const dateOfBirth = new Date(data.dob);

    const formattedDateOfBirth = `${dateOfBirth.getMonth() + 1}/${dateOfBirth.getDate()}/${dateOfBirth.getFullYear()}`;

    const ageInMilliseconds = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageInMilliseconds);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

const handleEdit = () => {
        // setEditedProfile(data);
        setEditedProfile({
            firstname: data.firstname,
            lastname: data.lastname,
            housename: data.housename,
            email: data.email,
            city: data.city,
            pincode: data.pincode,
            contact: data.contact,
            district: data.district,
            dob: data.dob,
            image: data.image 
        });
        setEditMode(true);
    };
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

      
        axiosInstance.post(`editUserById/${userid}`, editedProfile, {
            headers: {
              "Content-Type": "multipart/form-data",
            },})
            .then((res) => {
                console.log(res);
                toast.success("Updated Succesfully")
                setData(editedProfile);
                setEditMode(false);
                window.location.reload()
                
            })
            .catch((err) => {
                console.log(err);
            });
    };
        return (
        <>
            <NavMain url={url}/>
            <div className='UserProfile'>

                <section className='Cover-img'>
                    <h1>PROFILE</h1>
                </section>

                <div className='userprofile-img'>
                    <div className='userphoto'>
                        <img src={`${url}/${data.image?.filename}`} alt='Profile Photo' />
                    </div>
                    <div className='username'>{data.firstname} {data.lastname}</div>
                    <div className='userprofile-text'><p>User Profile</p></div>
                </div>

                <div className='userprofile-content'>
                    {/* <p>Lumière canvases are explosions of color, a vibrant dance of emotions poured onto the surface. Inspired by the chaos and beauty of the urban landscape, she uses bold strokes and gestural movements to capture the fleeting energy of life. Every piece is an invitation to lose yourself in the rhythm of color and find your own story within the abstract. */}
                    {/* </p> */}
                </div>

                <div className=' userprofile-details '>

                    <div className='row'>

                    <div className='detailsbar col-6'>
                        
                        
                    <div className='userprofileinput '><p>Name : 
                    {editMode ? <input type="text" name="firstname" value={editedProfile.firstname}style={{width:"140px",borderColor:"red"}} onChange={handleChange} /> : data.firstname}
                     {editMode ? <input type="text" name="lastname" value={editedProfile.lastname} style={{width:"70px",borderColor:"red"}} onChange={handleChange}/> : data.lastname} 
                        </p></div>
                    <div className='userprofileinput '><p>DOB :
                       {editMode ? <input type='date' name='dob' value={editedProfile.dob} onChange={handleChange} style={{borderColor:"red"}}/>:  formattedDateOfBirth}
                         </p></div>
                    <div className='userprofileinput '><p>Email :
                        {editMode ?<input type='email' name='email' value={editedProfile.email} onChange={handleChange} style={{borderColor:"red"}}/> :data.email}
                         </p></div>
                    </div>

                    <div className='detailsbar-2 col-6'>
                    <div className='userprofileinput '><p>Age : {age}</p></div>
                    <div className='userprofileinput '><p>Contact number :
                        {editMode ?<input type='number' name='contact' value={editedProfile.contact} style={{width:"135px",borderColor:"red"}}  onChange={handleChange}/> :data.contact}
                         </p></div>
                    </div>

                    <div row>
                        <div className='col-12'>
                        <div className='userprofileinput2 '><p>Address :
                          {editMode?<input type='text' name='housename' value={editedProfile.housename} onChange={handleChange} style={{borderColor:"red"}}/> :data.housename} 
                          {editMode?<input type='text' name='city' value={editedProfile.city} onChange={handleChange} style={{borderColor:"red"}}/> : data.city} 
                          {editMode?<input type='text' name='district' value={editedProfile.district} style={{marginLeft:"65px" ,borderColor:"red"}} onChange={handleChange} /> : data.district} 
                          {editMode?<input type='text' name='pincode' value={editedProfile.pincode} onChange={handleChange}style={{borderColor:"red"}} /> : data.pincode}
                          {editMode?<input type='file' name='image' style={{marginLeft:"65px"}}   onChange={(e) => handleChange(e)} /> :""}

                            </p></div>
                        </div>
                    </div>
                    

                    </div>

                   <div className='userprofilebutton'> 
                   {editMode ? <button onClick={handleSave}>SAVE</button> : <button onClick={handleEdit}>EDIT</button>}
                   </div>
                    
                   </div>

            </div>
            <Footer/>
        </>
    )
}

export default UserProfile