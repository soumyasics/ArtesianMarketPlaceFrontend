import React, { useEffect, useState } from "react";
import "./ArtistProfile.css";
import ArtistSidebar from "../../ArtistSidebar";
import profileimage from "../../../../Assets/aubrey-graham-photo-u164.jpg";
import axiosInstance from "../../../../Schemas/BaseUrl";
import { toast } from "react-toastify";

function ArtistProfile({ url }) {
  const artistid = localStorage.getItem("artistid");
  console.log(artistid);

  const [data, setData] = useState({});
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
    dob:"",
    image:""
});


  useEffect(() => {
    axiosInstance
      .post(`viewArtistById/${artistid}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //dob and  age displaying
  const dateOfBirth = new Date(data.dob);
  const formattedDateOfBirth = `${
    dateOfBirth.getMonth() + 1
  }/${dateOfBirth.getDate()}/${dateOfBirth.getFullYear()}`;
  const ageInMilliseconds = Date.now() - dateOfBirth.getTime();
  const ageDate = new Date(ageInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  //editmode become true
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

// const handleChange = (e) => {
//   if (e.target.type === 'file') {
//       const file = e.target.files[0];
//       setEditedProfile({ ...editedProfile, [e.target.name]: file });
//   } else {
//       setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
//   }
// };
const handleChange = (e) => {
  if (e.target.type === 'file') {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append(e.target.name, file);
      setEditedProfile((prevProfile) => ({
        ...prevProfile,
        image: formData,
      }));
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


  axiosInstance.post(`editArtistById/${artistid}`, editedProfile, {
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
    <div>
      <div className="row">
        <div className="col-2">
          <ArtistSidebar />
        </div>

        <div class="col-10 artistProfile">
          <div className="artistProfilepage">
            <h1>PROFILE</h1>

            <div className="artistprofile-img">
              <div className="artistphoto">
                <img
                  src={`${url}/${data.image?.filename}`}
                  alt="Profile Photo"
                />
              </div>
              <div className="artistname">
                {data.firstname} 
                {data.lastname}
              </div>
              <div className="artistprofile-text">
                <p>Artist</p>
              </div>
            </div>

            <div className="artistprofile-content">
              {/* <p>Lumière canvases are explosions of color, a vibrant dance of emotions poured onto the surface. Inspired by the chaos and beauty of the urban landscape, she uses bold strokes and gestural movements to capture the fleeting energy of life. Every piece is an invitation to lose yourself in the rhythm of color and find your own story within the abstract.
    </p> */}
            </div>

            <div className=" artistprofile-details ">
              <div className="row">
                <div className="detailsbar col-6">
                  <div className="artistprofileinput ">
                    <p>
                      Name :
                      {editmode? <input type="text" style={{width:"180px",borderColor:"red"}} name="firstname" value={editedProfile.firstname} onChange={handleChange}/>:  data.firstname} 
                      {editmode? <input type="text" style={{width:"100px",borderColor:"red"}} name="lastname" value={editedProfile.lastname} onChange={handleChange}/>:  data.lastname} 
                    </p>
                  </div>
                  <div className="artistprofileinput ">
                    <p>DOB :
                    {editmode ? <input type='date'    style={{borderColor:"red"}} name='dob' value={editedProfile.dob} onChange={handleChange}/>:  formattedDateOfBirth}
                       </p>
                  </div>
                  <div className="artistprofileinput ">
                    <p>
                      Email :{editmode ? <input type="email"  name='email' value={editedProfile.email} onChange={handleChange}  style={{borderColor:"red"}}/> : data.email}
                    </p>
                  </div>
                </div>

                <div className="detailsbar-2 col-6">
                  <div className="artistprofileinput ">
                    <p>Age : {age}</p>
                  </div>
                  <div className="artistprofileinput ">
                    <p>Contact number :
                         {editmode? <input type="number" style={{borderColor:"red"}}  name='contact' value={editedProfile.contact} onChange={handleChange}/>: data.contact}</p>
                  </div>
                </div>

                <div row>
                  <div className="col-12">
                    <div className="artistprofileinput2 ">
                      <p>
                        Address :
                         {editmode ?<input type="text"  name='housename' value={editedProfile.housename} onChange={handleChange} style={{borderColor:"red"}}/>:   data.housename} 
                         {editmode ?<input type="text"  name='city' value={editedProfile.city} onChange={handleChange} style={{borderColor:"red"}}/>:   data.city} 
                         {editmode ?<input type="text"  name='district' value={editedProfile.district} onChange={handleChange} style={{borderColor:"red"}}/>:   data.district} 
                         {editmode?<input type='text' name='pincode' value={editedProfile.pincode} onChange={handleChange}style={{borderColor:"red",marginLeft:"65px"}} /> : data.pincode}
                          {editmode?<input type='file' name='image' style={{marginLeft:"65px"}}   onChange={(e) => handleChange(e)} /> :""}

                      </p>
                    </div>
                    <div className="artistprofileinput2 ">
                      <p>
                        Pickup Address : {data.housename} {data.city}{" "}
                        {data.district}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="artistprofilebutton">
                {editmode ? (
                  <button onClick={handleSave}>SAVE</button>
                ) : (
                  <button onClick={handleEdit}>EDIT</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistProfile;
