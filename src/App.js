import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./Components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path="/offers" element = {<Offers/>}/>
          <Route path="/profile" element = {<Profile/>} />
          <Route path="/signIn" element = {<SignIn/>}/>
          <Route path="/signUp" element = {<SignUp/>}/>
          <Route path="/forgotPassword" element = {<ForgotPassword/>}/>

        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
/>
      
    </div>
  );
}

export default App;
