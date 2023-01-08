import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./Components/Header";
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
      
    </div>
  );
}

export default App;
