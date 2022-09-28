import {Routes, Route} from "react-router-dom"
import './App.css';
import AboutUs from "./components/AboutUs";
import Donate from "./components/Donate";
import Login from './components/Login';
import Register from "./components/User";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import NavMenu from "./components/Navbar";
import AddPet from "./components/AddPet";
import ViewYourPet from "./components/ViewYourPet";
import AdopterList from "./components/AdopterList";
import FosterList from "./components/FosterList";
import VolunteerList from "./components/VolunteerList";
import PetDetails from "./components/PetDetails";
import PaymentSuccess from "./components/PaymentSuccess";
import DonationDetails from "./components/DonationDetails";
import UserProfile from "./components/UserProfile";
import UpdatePet from "./components/UpdatePet";
import ServiceRequest from "./components/ServiceRequest";
import ForgetPassword from "./components/ForgetPassword";
import ImageUpload from "./components/ImageUpload";
import AdoptionRequest from "./components/AdoptionRequest";
import UpdateUser from "./components/UpdateUser";



function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/forgotpassword" element = {<ForgetPassword/>}/>
        <Route path = "/newuser" element = {<Register />}/>
        <Route path = "/aboutus" element = {<AboutUs />} />
        <Route path = "/donate" element = {<Donate/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/blogs" element = {<Blogs/>}/>
        <Route path = "/addpet" element = {<AddPet/>}/>
        <Route path = "/viewpet" element = {<ViewYourPet/>}/>
        <Route path = "/adopterlist" element = {<AdopterList/>}/>
        <Route path = "/fosterlist" element = {<FosterList/>}/>
        <Route path = "/volunteerlist" element = {<VolunteerList/>}/>
        <Route path = "/petdetails" element = {<PetDetails/>}/>
        <Route path = "/success" element = {<PaymentSuccess/>}/>
        <Route path = "/donationdetails" element = {<DonationDetails/>}/>
        <Route path = "/profile" element = {<UserProfile/>}/>
        <Route path = "/updatepet" element = {<UpdatePet/>}/>
        <Route path = "/serviceRequests" element = {<ServiceRequest/>}/>
        <Route path = "/imageupload" element = {<ImageUpload/>}/>
        <Route path = "/sendAdoptionRequest" element = {<AdoptionRequest/>}/>
        <Route path = "/updateuser" element = {<UpdateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
