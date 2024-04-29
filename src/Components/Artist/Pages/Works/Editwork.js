import React, { useEffect, useState } from 'react'
import "./ArtistWorks.css";
import ArtistSidebar from "../../ArtistSidebar";
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import workimg from "../../../../Assets/Rectangle 12.png";
import axiosInstance from "../../../../Schemas/BaseUrl";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";


function Editwork({url}) {
    const {id}=useParams()
    const [edit,setEdit]=useState({
        name:"",
        price:"",
        file:null,
        artistId:id

    })
    useEffect(()=>{
        axiosInstance.post(`viewArtworkById/${id}`)
        .then((res)=>{
            console.log(res);
            setEdit(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    // const handleChange = (e) => {
    //     if (e.target.name === "image") {
    //       const file = e.target.files[0];
    //       setEdit({ ...edit, [e.target.name]: file });
    //     } else {
    //       setEdit({ ...edit, [e.target.name]: e.target.value });
    //     }
    //   };
    const handleChange = (e) => {
      if (e.target.name === "file") {
        const file = e.target.files[0];
        setEdit({ ...edit, file });
      } else {
        setEdit({ ...edit, [e.target.name]: e.target.value });
      }
    };
    
      console.log(edit);
const navigate=useNavigate()

const updatefn = (e) => {
  e.preventDefault(); 
  if (edit.price <= 0) {
      toast.error("Price must be greater than 0");
      return;
  }
  const formData = new FormData();
  formData.append("name", edit.name);
  formData.append("price", edit.price);
  formData.append("image", edit.file);
  axiosInstance.post(`/editArtWorkById/${id}`, formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((res) => {
      if (res.data.status === 200) {
          toast.success("Updated successfully");
           navigate("/artist_works");
      } else {
          toast.error(res.data.msg);
      }
  })
  .catch((err) => {
      console.log(err);
  });
};
return (
    <>
          <div className="ArtistWorks">
        <div className="row">
          <div className="col-2">
            <ArtistSidebar />
          </div>

          <div class="col-10 works">
            <div className="works-form">
              <h1>Edit Works</h1>
              <form onSubmit={updatefn}>
                <div className="works-input">
                  <input
                    type="text"
                    placeholder="Art Name"
                    name="name"
                    value={edit.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="works-input">
                  <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={edit.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="works-input">
                  <img src={`${url}/${edit.file?.filename}`} alt='image' width="300px" height="200px"/>
                </div>

                <div className="works-files">
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                  />
                </div>
                <div className="works-btn">
                  <button type="submit">Save</button>
                </div>
              </form>
            </div>

</div>
</div>
</div>
    </>
  )
}

export default Editwork