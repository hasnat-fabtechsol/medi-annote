import { Box, CssBaseline, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
// import AuthContext from '../../auth/auth-context';
import Header from './Header';
// import Navbar from './Navbar';
import SideNav from './SideNav';
import CopyRight from '../component/CopyRight';




const DashboardLayout = ({type}) => {
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const {userType,isLoggedIn,debugMode} = useSelector((state) => state.auth)
  
  // const handleDrawerToggle = () => {
  //     setMobileOpen(!mobileOpen);
  // };
  // // const auth = useContext(AuthContext);
  // const navigate=useNavigate()
  
  // useEffect(()=>{
  //  if(!isLoggedIn)
  //         navigate('/login')

  // },[])
  // if(userType!=="MP")
  // return <Navigate to={"/patient/inquiries"}/>
return (

  <Box  sx={{ display: "block",backgroundColor:"#181922"  , position:"relative",height:"100vh"  }}>
  <CssBaseline />
  <div>
  <Header />
  </div>
  
  <Box className='px-1 px-md-3 pt-5 pb-2 zoom' style={{backgroundColor:"#181922"   }}
    component="div"
    sx={{
      marginLeft: { md: `auto` },
    
      width: { md: `calc(100% - ${230}px)` },
    }}
  >
    <Toolbar variant="dense" />




      <Outlet context={{type}}  style={{backgroundColor:"#181922"}}/>
      <CopyRight/>


      </Box>
      </Box>
)
};

export default DashboardLayout;
