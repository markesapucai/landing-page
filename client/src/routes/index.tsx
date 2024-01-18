import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../services/LoginValidation";
import Page404 from "../pages/Page404";
import Register from "../services/RegisterValidation";

export default function Routees() {
  return (
    <Routes>
      <Route path="*" element={<Page404 />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  )
}