import { AppBar ,Avatar,Button,Hidden,IconButton,Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'
import { ArrowForward, NotificationAdd } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

import { MdOutlineMarkChatUnread } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { NavLink} from "react-router-dom";



  function Navbar({handleDrawerToggle}) {
//     const [userinfo, Setuserinfo] = useState()
// const location=useLocation()
// // const path=location.pathname.replace("-", " ").substring(1).replace("inovice","invoices").replace("booking","bookings").toLocaleUpperCase() 
// const path=location.pathname.split("/")[1].replace("inovice","invoices").replace("-", " ").replace("booking","bookings").toLocaleUpperCase()
// console.log(path,"jik")


    // const fetchData = async ()=>{
    // const result = await apiClient.get("/users/my-info")
    // Setuserinfo(result.data.result)
    // }

    // useEffect(() => {
    //  fetchData()
    // }, []);



    return (
    <Box className="" >
       <div className="navbar  navbar-expand-lg me-4 position-absolute w-100 d-flex navbar-light navbg  "  style={{backgroundColor:"#090B11",color:"white",zIndex:"1199"}}>
  <div className="container-fluid  shrink2 my-2">
   

    <Link style={{fontSize:"25px"}} className=" ms-2 text-white fs-bold text-decoration-none" to="/">
    MediAnnote
      {/* <div style={{ width: "10rem" }}>
        <img width="100%"
          src={require("../assets/HealthHop logo reverse on dark background (1).png" )}
        />
      </div> */}
      {/* <div className="" style={{width:"7rem"}}>
      <img width={"100%"} src={require("../assets/HealthHop logo reverse on dark background (1).png")} alt="" />
      </div> */}
    </Link>
    
    {/* <button
      className="navbar-toggler navbar-togl-btn"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className=" navbar-toggler-icon text-white"></span>
    </button> */}

    <div className=" " id="">
     
      <div className="d-flex justify-content-end mx-1 w-100">
        {/* <div className="col-lg-12 d-flex justify-content-end align-items-center mb-3 mb-lg-0 text-white gap-2"> */}
        <ul className="d-flex list-unstyled mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <NavLink 
            style={{ padding:"9px 30px", fontSize: '16px', maxWidth:"fit-content" }}
            className="nav-link"
            exact
            activeClassName="active"
            end="/"
            to="/"
            title="Home"
          >
            English (US)
          </NavLink> */}
   
        </li>
        <li className="nav-item  dropdown">
          <NavLink
            className="nav-link text-light"
            exact
            activeClassName="active"
            to="/faq"
            title="Faq"
            style={{ fontSize: '16px', padding:"9px ", maxWidth:"fit-content",marginInline:"30px"}}
           
          >
            Log in
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link text-light"
            exact
            activeClassName="active"
            to="/about-us"
            title="ABout us"
            style={{ fontSize: '16px' , padding:"9px ", maxWidth:"fit-content",marginInline:"30px"}}
           
          >
            sign up
          </NavLink>
         
  
        </li>
        <li>
        <IconButton onClick={handleDrawerToggle}>
    <MenuIcon style={{color:"white"}} />
  </IconButton>
        </li>
  
    
      </ul>
        {/* </div> */}
      </div>
    </div>
  </div>
</div>
              
           
        </Box>
    );
}

export default Navbar;

