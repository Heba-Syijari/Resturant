import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Pages/login";
import ForgetPassword from "./Pages/forgetPassword";
import ResetPassword from "./Pages/resetPassword";
import Home from "./Pages/Admin/home";
import HomePage from "./Pages";
import AddResturant from "./Pages/Admin/addResturant";
import Setting from "./Pages/Admin/setting";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/reset-password/:id" element={<ResetPassword/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/add-resturant" element={<AddResturant/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
