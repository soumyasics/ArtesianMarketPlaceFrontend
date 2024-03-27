import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
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


function App() {
  return (
    <BrowserRouter>

      <div>



        <Routes>
          {/* Admin */}

<Route path="admin_login" element={<AdminLogin/>}/>

          {/* User */}

          <Route path="/user_login" element={<Login data='user' />} />
          <Route path="/user_register" element={<UserRegistration />} />
          <Route path="/user_forgetpassword" element={<UserForgetPassword />} />
          <Route path="/user_profile" element={<UserProfile/>}/>
          <Route path="/user_cart" element={<Cart/>}/>
          
          <Route path="/user_notification" element={<NotificationMain/>}/>
          
          <Route path = "/user_messages" element={<Notification/>}/>
          <Route path="/user_dashboard" element={<Dashboard/>}/>
          <Route path="/aboutus" element={<About/>}/> 
          <Route path="/gallery" element={<Gallery/>}/>

          {/* Artist */}

          <Route path="/artist_login" element={<Login data='artist' />} />
          <Route path="/artist_forgetpassword" element={<ArtistForgetPassword />} />
          <Route path="/artist_register" element={<ArtistRegistration/>}/>
          <Route path = "/artist_orders" element={<ArtistOrdrers/>}/>
          <Route path = "/artist_profile" element={<ArtistProfile/>}/>

          {/* DeliveryAgent */}

          <Route path="/delivery_agent_login" element={<Login data='deliveryAgent' />} />
          <Route path="/delivery_agent_forgetpassword" element={<DeliveryAgentForgetPassword />} />

        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
