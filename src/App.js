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


function App() {
  return (
    <BrowserRouter>

      <div>



        <Routes>
          
          {/* Admin */}

          <Route path="admin_login" element={<AdminLogin />} />
          <Route path="admin_viewuser" element={<AdminViewUsers />} />
          <Route path="admin_viewartist" element={<AdminViewArtists />} />
          <Route path="admin_viewagent" element={<AdminViewAgents />} />
          <Route path="admin_viewartistindividual" element={<AdminViewArtistIndividual />} />
          <Route path="admin_viewuserindividual" element={<AdminViewUserIndividual />} />
          <Route path="admin_viewdeliveryagentindividual" element={<AdminViewDeliveryAgentIndividual />} />

          {/* User */}

          <Route path="/user_login" element={<Login data='user' />} />
          <Route path="/user_register" element={<UserRegistration />} />
          <Route path="/user_forgetpassword" element={<UserForgetPassword />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/user_cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order_confirmed" element={<OrderConfirm />} />
          <Route path="/user_notification" element={<NotificationMain />} />
          <Route path="/user_messages" element={<Notification />} />
          <Route path="/user_dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/view_artists" element={<ViewArtists />} />
          <Route path="/view_artistworks" element={<IndividualArtistWorks />} />
          <Route path="/view_orders" element={<UserOrders />} />
          <Route path="/viewsinglework" element={<ViewSingleWork />} />
          <Route path="/user_chat" element={<UserChat />} />

          {/* Artist */}

          <Route path="/artist_login" element={<Login data='artist' />} />
          <Route path="/artist_forgetpassword" element={<ArtistForgetPassword />} />
          <Route path="/artist_register" element={<ArtistRegistration />} />
          <Route path="/artist_orders" element={<ArtistOrdrers />} />
          <Route path="/artist_profile" element={<ArtistProfile />} />
          <Route path="/artist_works" element={<ArtistWorks />} />
          <Route path="/artist_chatmainpage" element={<ArtistChatmain />} />
          <Route path="/artist_chat" element={<ArtistChat />} />


          {/* DeliveryAgent */}

          <Route path="/delivery_agent_login" element={<Login data='deliveryAgent' />} />
          <Route path="/delivery_agent_forgetpassword" element={<DeliveryAgentForgetPassword />} />
          <Route path="/delivery_agent_register" element={<DeliveryAgentRegister />} />
          <Route path="/delivery_agent_routes" element={<DeliveryRoutes />} />
          <Route path="/delivery_agent_jobs" element={<DeliveryJobs />} />
          <Route path="/delivery_agent_profile" element={<DeliveryAgent_Profile />} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
