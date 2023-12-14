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

  <Box  sx={{ display: "flex",backgroundColor:"#EFF3F4",height:"100vh" , overflow: "auto" , position:"relative"  }}>
  <CssBaseline />
  <div>
  <Header />
  </div>
  
  <Box className='px-1 px-md-3 pt-5 pb-2 zoom' style={{backgroundColor:"#181922" , height:"100%"}}
    component="div"
    sx={{
      flexGrow: 1,
    
      width: { md: `calc(100% - ${240}px)` },
    }}
  >
    <Toolbar variant="dense" />




      <Outlet context={{type}}  style={{backgroundColor:"#181922"}}/>


      </Box>
      </Box>
)
};

export default DashboardLayout;
