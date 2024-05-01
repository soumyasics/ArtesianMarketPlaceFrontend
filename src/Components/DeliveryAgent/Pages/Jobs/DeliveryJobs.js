import React, { useEffect, useState } from "react";
import "./DeliveryJobs.css";
import DeliveryAgentSidebar from "../../DeliveryAgentSidebar";
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import axiosInstance from "../../../../Schemas/BaseUrl";
import { toast } from "react-toastify";

function DeliveryJobs() {
  const agentid = localStorage.getItem("deliveryid");
  console.log(agentid);
  const [delivery, setDelivery] = useState([]);
  const [deliveryStatus, setDeliveryStatus] = useState({status:''});

  useEffect(() => {
    axiosInstance
      .post(`viewOrdersByDeliveryId/${agentid}`)
      .then((res) => {
        console.log(res);
        setDelivery(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updatefn = (orderid,a) => {
    console.log(a);

    axiosInstance
      .post(`updateStatusOfOrdersByOrderId/${orderid}`, {
        deliveryStatus: a,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          toast.success("Updated Successfully");
          window.location.reload()
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dropped = (orderid,a) => {
    console.log(a);
    axiosInstance
      .post(`updateStatusOfOrdersByOrderId/${orderid}`, {
        deliveryStatus: a,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          toast.success("Updated Successfully");
          window.location.reload()

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <>
      <div className="DeliveryJobs">
        <div className="row">
          <div className="col-2">
            <DeliveryAgentSidebar />
          </div>
          <div class="col-10 jobs">
            <div className="jobs-table">
              <h1>Jobs</h1>

              <Table
                striped
                bordered
                hover
                className="mt-5 ms-3"
                style={{ width: "100%" }}
              >
                <thead style={{ height: "50px" }}>
                  <tr>
                    <th style={{ width: "200px" }}>SL</th>
                    <th style={{ width: "200px" }}>Order</th>
                    <th style={{ width: "200px" }}>From</th>
                    <th style={{ width: "200px" }}>To</th>
                    <th style={{ width: "200px" }}>Status</th>
                    <th style={{ width: "200px" }}>Pickup Status</th>
                    <th style={{ width: "200px" }}>Drop Status</th>
                    <th style={{ width: "200px" }}>Complete Status</th>
                  </tr>
                </thead>
                <tbody style={{}}>
                  {delivery && delivery.length ? (
                    delivery.map((a, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td className="veritical-center">{a?.artid?.name}</td>
                          <td id="delivery-place">
                            {a?.artistId?.housename}, {a?.artistId?.city} ,{" "}
                            {a?.artistId?.district}
                            <br />
                            Contact:{a?.artistId?.contact}
                          </td>
                          <td id="delivery-place">
                            {a?.userid?.housename}, {a?.userid?.city} ,{" "}
                            {a?.userid?.district}
                            <br />
                            Contact:{a?.userid?.contact}
                          </td>
                          <td id="status">Accepted</td>
                          <td id="status-icon">
                            Status &nbsp;{" "}
                            <Icon
                              icon="fa6-solid:truck-pickup"
                              className="truckicon"
                            />
                            <button
                              type="submit"
                              className="btn btn-primary"
                              style={{ marginTop: "20px" }}
                              onClick={() => {
                                // setDeliveryStatus({staus:'pickup'});
                                updatefn(a._id,'pickup');
                              }}
                            >
                              Picked Up
                            </button>
                          </td>
                          <td id="status-icon">
                            Status &nbsp;
                            <Icon
                              icon="solar:delivery-bold"
                              className="deliveryicon"
                            />
                            <button
                              type="submit"
                              className="btn btn-primary"
                              style={{ marginTop: "20px" }}
                              onClick={() => {
                                dropped(a._id,'dropped');
                              }}
                            >
                              Dropped
                            </button>
                          </td>
                          <td id="status">
                            {a?.deliveryStatus === "pickup" ? (
                              <>
                                <span>Pending &nbsp;</span>
                                <Icon
                                  icon="fa6-solid:truck-pickup"
                                  className="truckicon"
                                />
                              </>
                            ) : a?.deliveryStatus === "dropped" ? (
                              <>
                                <span>Completed &nbsp;</span>
                                <Icon
                                  icon="fluent:cloud-sync-complete-16-filled"
                                  className="cloudicon"
                                />
                              </>
                            ) : (
                              "Unknown Status"
                            )}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <div>No Works Available</div>
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryJobs;
