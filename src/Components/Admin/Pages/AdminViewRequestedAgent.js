import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar';
import profileimage from "../../../Assets/aubrey-graham-photo-u164.jpg";
import "./AdminViewDeliveryAgentIndividual.css"
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../Schemas/BaseUrl';
import { toast } from 'react-toastify';

function AdminViewRequestedAgent({url}) {
    
    const admin=localStorage.getItem("adminid")
    console.log(admin+"adminid");

    const {id}=useParams()
    // console.log(id);

    const[delivery,setDelivery]=useState({})

    const navigate=useNavigate()

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

    const acceptfn=(()=>{
        axiosInstance.post(`acceptDelReqs/${id}`)
        .then((res)=>{
            if(res.data.status==200){
                toast.success("Updated Successfully")
                navigate("/admin_viewagentrequests")
            }
        })
        .catch((err)=>{
            toast.error("Cant accept")
        })
    })
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
                    <AdminSidebar />
                </div>

                <div class='col-10 artistProfile' >

                    <div className='artistProfilepage'>
                        {/* <h1>PROFILE</h1> */}
                        {/* <div className='artistprofile-img'> */}
                            {/* <div className='artistphoto'>
                                <img src={profileimage} alt='Profile Photo' />
                            </div> */}
                            {/* <div className='artistname'>Lumiere</div>
                            <div className='artistprofile-text'><p>Delivery Agent</p></div> */}
                        {/* </div> */}

                        {/* <div className='artistprofile-content'>
                            <p>Lumière canvases are explosions of color, a vibrant dance of emotions poured onto the surface. Inspired by the chaos and beauty of the urban landscape, she uses bold strokes and gestural movements to capture the fleeting energy of life. Every piece is an invitation to lose yourself in the rhythm of color and find your own story within the abstract.
                            </p>
                        </div> */}
                        <div className='delivery-lisence text-center'>
                        <img src={`${url}/${delivery.licence?.filename}`} alt='Profile Photo' width="500px" height="260px"/>

                        </div>

                        <div className=' artistprofile-details '>

                            <div className='row'>

                                <div className='detailsbar col-6'>


                                    <div className='artistprofileinput '><p>Name : {delivery?.firstname}  {delivery?.lastname}</p></div>
                                    <div className='artistprofileinput '><p>Aadhar : {delivery?.aadhar}</p></div>
                                    <div className='artistprofileinput '><p>Email : {delivery?.email}@gmail.com</p></div>
                                </div>

                                <div className='detailsbar-2 col-6'>
                                    <div className='artistprofileinput '><p>Age : {delivery?.age}</p></div>
                                    <div className='artistprofileinput '><p>Contact number : {delivery?.contact}</p></div>
                                </div>

                                <div row>
                                    <div className='col-12'>
                                        <div className='artistprofileinput2 '><p>Address : {delivery?.housename} {delivery?.city} {delivery?.district} {delivery?.pincode} </p></div>
                                    </div>
                                </div>

                                <div className='adminremoverequestedagentbtn '>

                                    <div className='dlvrybtn1'>  <button onClick={acceptfn}>Accept Agent</button> </div>
                                    <div className='dlvrybtn2'> <button onClick={deletefn}>Remove Agent</button> </div>

                                </div>


                            </div>



                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminViewRequestedAgent