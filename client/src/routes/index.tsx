import { Route, Routes } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../services/LoginValidation";
import Page404 from "../pages/Page404";
import Register from "../services/RegisterValidation";
import Home from "../pages/Home";

export default function Routees() {
  return (
    <Routes>
      <Route path="*" element={<Page404 />}/>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
  )
}