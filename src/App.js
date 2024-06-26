import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "remixicon/fonts/remixicon.css";
import UserForgetPassword from "./Components/User/UserForgetPassword";

import UserRegistration from "./Components/User/UserRegistration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import DeliveryAgentForgetPassword from "./Components/DeliveryAgent/DeliveryAgentForgetPassword";
import ArtistForgetPassword from "./Components/Artist/ArtistForgetPassword";
import AdminLogin from "./Components/Admin/AdminLogin";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import UserProfile from "./Components/User/UserPages/UserProfile/UserProfile";
import ArtistRegistration from "./Components/Artist/ArtistRegistration";
import ArtistOrdrers from "./Components/Artist/Pages/Orders/ArtistOrdrers";
import ArtistProfile from "./Components/Artist/Pages/Profile/ArtistProfile";
import Cart from "./Components/User/UserPages/Cart/Cart";
import Dashboard from "./Components/User/UserPages/Dashboard/Dashboard";
import Notification from "./Components/User/UserPages/Notification/Notification";
import NotificationMain from "./Components/User/UserPages/Notification/NotificationMain";
import About from "./Components/User/UserPages/About/About";
import Gallery from "./Components/User/UserPages/Gallery/Gallery";
import Checkout from "./Components/User/UserPages/Cart/Checkout";
import OrderConfirm from "./Components/User/UserPages/Cart/OrderConfirm";
import ViewArtists from "./Components/User/UserPages/Artists/ViewArtists";
import ArtistWorks from "./Components/Artist/Pages/Works/ArtistWorks";
import DeliveryRoutes from "./Components/DeliveryAgent/Pages/Routes/DeliveryRoutes";
import DeliveryJobs from "./Components/DeliveryAgent/Pages/Jobs/DeliveryJobs";
import DeliveryAgentRegister from "./Components/DeliveryAgent/DeliveryAgentRegister";
import AdminViewUsers from "./Components/Admin/Pages/AdminViewUsers";
import AdminViewArtists from "./Components/Admin/Pages/AdminViewArtists";
import AdminViewAgents from "./Components/Admin/Pages/AdminViewAgents";
import ArtistChat from "./Components/Artist/Pages/Chat/ArtistChat";
import AdminViewArtistIndividual from "./Components/Admin/Pages/AdminViewArtistIndividual";
import AdminViewUserIndividual from "./Components/Admin/Pages/AdminViewUserIndividual";
import DeliveryAgent_Profile from "./Components/DeliveryAgent/Pages/Profile/DeliveryAgent_Profile";
import AdminViewDeliveryAgentIndividual from "./Components/Admin/Pages/AdminViewDeliveryAgentIndividual";
import UserOrders from "./Components/User/UserPages/Orders/UserOrders";
import IndividualArtistWorks from "./Components/User/UserPages/Artists/IndividualArtistWorks";
import ArtistChatmain from "./Components/Artist/Pages/Chat/ArtistChatmain";
import ViewSingleWork from "./Components/User/UserPages/Artists/ViewSingleWork";
import UserChat from "./Components/User/UserPages/Chat/UserChat";
import AdminViewAgentRequest from "./Components/Admin/Pages/AdminViewAgentRequest";
import AdminViewRequestedAgent from "./Components/Admin/Pages/AdminViewRequestedAgent";
import Editwork from "./Components/Artist/Pages/Works/Editwork";
import Homepage from "./Components/User/UserPages/Homepage";
import Payment from "./Components/User/Payment";


const url = "http://localhost:4004";
function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          
          {/* Admin */}

          <Route path="admin" element={<AdminLogin />} />
          <Route path="admin_viewuser" element={<AdminViewUsers />} />
          <Route path="admin_viewartist" element={<AdminViewArtists />} />
          <Route path="admin_viewagent" element={<AdminViewAgents />} />
          <Route path="/admin_viewartistindividual/:id" element={<AdminViewArtistIndividual url={url}/>}/>
          <Route path="/admin_viewuserindividual/:id"  element={<AdminViewUserIndividual url={url} />}  />
          
          <Route path="admin_viewagentrequests"  element={<AdminViewAgentRequest />}  />
          <Route path='/admin_viewrequestedagentdetails/:id'  element={<AdminViewRequestedAgent url={url}/>}/>

          <Route  path="/admin_viewdeliveryagentindividua/:id"  element={<AdminViewDeliveryAgentIndividual url={url}/>}  />

          {/* User */}

          <Route path="/user_login" element={<Login data="user" />} />
          <Route path="/user_register" element={<UserRegistration />} />
          <Route path="/user_forgetpassword" element={<UserForgetPassword />} />
          <Route path="/user_profile" element={<UserProfile url={url} />} />
          <Route path="/user_cart" element={<Cart url={url}/>} />

          <Route path="/user_notification" element={<NotificationMain />} />

          <Route path="/user_messages" element={<Notification />} />
          <Route path="/user_dashboard" element={<Dashboard url={url}/>} />
          <Route path="/aboutus" element={<About url={url} />} />
          <Route path="/gallery" element={<Gallery url={url} />} />
          {/* <Route path="/user_profile" element={<UserProfile url={url}/>} /> */}
          {/* <Route path="/user_cart" element={<Cart url={url} />} /> */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order_confirmed" element={<OrderConfirm />} />
          <Route path="/user_notification" element={<NotificationMain/>}/>
          <Route path="/user_messages" element={<Notification />} />
          {/* <Route path="/user_dashboard" element={<Dashboard url={url} />} /> */}
          <Route path="/aboutus" element={<About />} />
          <Route path="/gallery" element={<Gallery url={url}/>} />
          <Route path="/view_artists" element={<ViewArtists url={url}/>} />
          <Route path="/view_artistworksindividual" element={<IndividualArtistWorks url={url} />} />
          <Route path="/view_orders" element={<UserOrders url={url}/>} />
          <Route path="/viewsinglework_art/:id" element={<ViewSingleWork url={url}/>}/>
          <Route path="/payment/:id" element={<Payment url={url}/>}/>


          <Route path="/" element={<Homepage url={url}/>}/>

          {/* Artist */}

          <Route path="/artist_login" element={<Login data="artist" />} />
          <Route path="/artist_forgetpassword" element={<ArtistForgetPassword />}/>
          <Route path="/artist_register" element={<ArtistRegistration />} />
          <Route path="/artist_orders" element={<ArtistOrdrers url={url}/>} />
          <Route path="/artist_profile" element={<ArtistProfile url={url}/>} />
          <Route path="/artist_works" element={<ArtistWorks url={url} />} />
          <Route path="/artist_chat" element={<ArtistChat />} />
          <Route path="/artist_editprofile/:id" element={<Editwork url={url}/>} />

          {/* DeliveryAgent */}

          <Route path="/delivery_agent_login" element={<Login data="deliveryAgent" />}/>
          <Route path="/delivery_agent_forgetpassword" element={<DeliveryAgentForgetPassword />}/>
          <Route path="/delivery_agent_register" element={<DeliveryAgentRegister />} />
          <Route path="/delivery_agent_routes" element={<DeliveryRoutes url={url}/>} />
          <Route path="/delivery_agent_jobs" element={<DeliveryJobs url={url} />} />
          <Route path="/delivery_agent_profile" element={<DeliveryAgent_Profile />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
