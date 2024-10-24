import { useEffect, useState } from 'react'
import './App.css'
import Header from "./Components/Header.jsx"
import { Route, Router, Routes } from 'react-router-dom';
import Turf from './Components/Turf/Turf.jsx';
import Homepage from './Components/Homepage.jsx';
import Admin from './Components/Admin/Admin.jsx';
import Auth from './Components/Auth/Auth.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from './Store/index.js';
import AdminProfile from './Components/Admin/AdminProfile.jsx';
import UserProfile from './Components/User/UserProfile.jsx';
import AddTurf from './Components/Admin/AddTurf.jsx';
import Booking from './Components/Booking/Booking.jsx';

function App() {
  const dispatch = useDispatch();
  const isAdminLogedIn =useSelector((state)=>state.admin.isLogedIn);
  const isUserLogedIn =useSelector((state)=>state.user.isLogedIn);
  const userId = localStorage.getItem("userId")
  useEffect(()=>{
  if(userId && userId !== "undefined"){
    dispatch(userActions.login());
  }
  if (localStorage.getItem("adminId")){
    dispatch(adminActions.login());
  }
    
},[dispatch,Auth])
  return (
    <div>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/turf" element={<Turf/>} />
          {isUserLogedIn && <Route path="/user/:id" element={<UserProfile/>} />}
          {(!isUserLogedIn && !isAdminLogedIn) &&<Route path="/admin" element={<Admin/>}/>}
          {isAdminLogedIn &&<>
          <Route path="/admin/:id" element={<AdminProfile/>} />
          <Route path="/admin/add" element={<AddTurf/>} />
          </>}
          {(!isUserLogedIn && !isAdminLogedIn) && <Route path="/auth" element={<Auth/>}/>}
          <Route path="/booking/:id" element={<Booking/>}/>
        </Routes>
      </section>
    </div>
  )
}

export default App;
