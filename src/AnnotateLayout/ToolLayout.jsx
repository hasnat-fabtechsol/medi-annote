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
import TopNav from './TopNav';
import RightNav from './RightNav';
import Footer from '../component/Footer';




const ToolLayout = ({type}) => {
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

  <Box  sx={{ display: "block",backgroundColor:"#131217"  , position:"relative",height:"100vh"  }}>
  <CssBaseline />
  <div>
  <Header />
  </div>
  

  {/* <div>
  <TopNav />
  </div> */}
  
  <Box className='ps-2 ps-md-3 pt-2 pb-2 zoom' style={{backgroundColor:"#131217"   }}
    component="div"
    sx={{
      marginLeft: { xs: `auto` },
      marginRight: "16px",
    
      width: "calc(100% - 116px)" ,
      paddingRight:{md: `270px`}
    }}
  >
    




      <Outlet context={{type}}  style={{backgroundColor:"#181922"}}/>
   

     


      </Box>
      {/* <RightNav /> */}
      <div style={{position:"fixed" , bottom:"0" , left:"0" , right : "0" , zIndex:"1300"}}>
      <Footer />
      </div>
      </Box>
)
};

export default ToolLayout;
