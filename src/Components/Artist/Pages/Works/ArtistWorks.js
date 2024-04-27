import React, { useEffect, useState } from "react";
import "./ArtistWorks.css";
import ArtistSidebar from "../../ArtistSidebar";
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import workimg from "../../../../Assets/Rectangle 12.png";
import axiosInstance from "../../../../Schemas/BaseUrl";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ArtistWorks({ url }) {
  const artistid = localStorage.getItem("artistid");
  console.log(artistid + "artist");

  const [addwork, setAddwork] = useState({
    name: "",
    price: "",
    image: "",
    artistId: artistid,
  });
  const [array, setArray] = useState([]);
  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setAddwork({ ...addwork, [e.target.name]: file });
    } else {
      setAddwork({ ...addwork, [e.target.name]: e.target.value });
    }
  };
  console.log(addwork);

  const submitfn = (e) => {
    if (addwork.price <= 0) {
      toast.error("Price must be greater than 0");
      return;
    }

    e.preventDefault();

    axiosInstance
      .post(`addartworks`, addwork, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          toast.success("Work added successfully");
          window.location.reload(false);
        } else {
          toast.error(res.data.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosInstance
      .post(`viewArtWorksByArtistId/${artistid}`)
      .then((res) => {
        console.log(res);
        setArray(res.data.data);
      })
      .catch((Err) => {
        console.log(Err);
      });
  }, []);




  return (
    <>
      <div className="ArtistWorks">
        <div className="row">
          <div className="col-2">
            <ArtistSidebar />
          </div>

          <div class="col-10 works">
            <div className="works-form">
              <h1>Works</h1>
              <form onSubmit={submitfn}>
                <div className="works-input">
                  <input
                    type="text"
                    placeholder="Art Name"
                    name="name"
                    value={addwork.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="works-input">
                  <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={addwork.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="works-files">
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="works-btn">
                  <button type="submit">ADD</button>
                </div>
              </form>
            </div>

            <div className="works-list">
              <h1>WORKS LIST</h1>

              <div className="works-table">
                <Table
                  striped
                  bordered
                  hover
                  className="mt-5 ms-3"
                  style={{ width: "100%" }}
                >
                  <thead style={{ height: "50px" }}>
                    <tr>
                      <th>SL</th>
                      <th>Work</th>
                      <th>Price</th>
                      <th>Name</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {array ? (
                      array.length ? (
                        array.map((a, index) => {
                          // const serialNumber = index + 1;
                          return (
                            <tr>
                              <td>{index + 1}</td>
                              <td id="workorders">
                                <img src={`${url}/${a.file?.filename}`} />
                                <p> </p>
                              </td>
                              <td>{a?.price}</td>
                              <td>{a?.name}</td>
                              <td ><Link to={`/artist_editprofile/${a._id}`}>Edit</Link></td>
                            </tr>
                          );
                        })
                      ) : (
                        <div>No data available</div>
                      )
                    ) : (
                      <div>No request is available</div>
                    )}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>

       





      </div>
    </>
  );
}

export default ArtistWorks;
