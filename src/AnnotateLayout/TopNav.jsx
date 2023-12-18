
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import CachedIcon from '@mui/icons-material/Cached';
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import { IoIosArrowBack } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";


const TopNav = () => (
    <>
   <AppBar position="" sx={{paddingTop:"80px" , backgroundColor:"transparent" , width:{md: `calc(100% - 0px)`} , boxShadow:"none" , margin:"auto" , paddingRight:{md : `270px`} , marginRight:"0px" , paddingLeft:"100px" }}>
    <Toolbar variant="dense" sx={{justifyContent:"space-between" , padding:"5px 0px"}}>
    <div className="container">
        <Box sx={{ display:"flex" , justifyContent:"space-between" , alignItems:"center" , overflowX:"auto"}}>
            <Box sx={{ display:"flex"  , alignItems:"center" }}>
                <IconButton>
                <IoIosArrowBack style={{ fontSize: 32 , color:"#A7AEBF" ,padding:"5px" , backgroundColor:"#14151D"  }} />

            
                <IoIosArrowForward style={{ fontSize: 32 , color:"#A7AEBF" ,padding:"5px" , backgroundColor:"#14151D"  }} />
                </IconButton>

                <IconButton sx={{padding:"6px" , backgroundColor:"#14151D" , borderRadius:"5px"}}>
                    <img src={require('../assets/lab.png')} alt="" />
                
                </IconButton>
                <IconButton sx={{padding:"5px"}}>
                <CachedIcon sx={{ fontSize: 32 , color:"#A7AEBF" , padding:"5px" , backgroundColor:"#14151D" , borderRadius:"6px" }}/>
                </IconButton>
            </Box>
            <Box>
                <p className="m-0 py-2 px-3 d-flex rounded-3" style={{backgroundColor:"#14151D"}}><span style={{color:"#2C9BF6"}} >01 </span> / <span>23</span></p>
            </Box>    

            <Box sx={{ display:"flex" , gap:"5px" , alignItems:"center" }}>
            <p className="m-0 py-2 d-flex px-3 rounded-3" style={{backgroundColor:"#14151D"}}><span style={{color:"#2C9BF6"}} >01 </span> : <span>23</span></p>
            <Avatar alt="Remy Sharp" src={require('../assets/avatar.png')} />
                <IoIosArrowForward style={{ fontSize: 22 , color:"#2C9BF6"   }} />
                <TaskOutlinedIcon sx={{ fontSize: 36 , color:"#2C9BF6"  , }}/>
                <IoIosArrowForward style={{ fontSize: 22 , color:"#2C9BF6"   }} />
                <DoneIcon sx={{ fontSize: 36 , color:"#2C9BF6" , backgroundColor:"#181922" , borderRadius:"50%" , border:"1px solid #2c9bf678" , padding:"8px"}}/>  
                <DeleteOutlineOutlinedIcon sx={{ fontSize: 36 , color:"#2C9BF6" , backgroundColor:"#181922" , borderRadius:"50%" , border:"1px solid #2c9bf678" , padding:"8px"}}/> 
         
            </Box>
        </Box>
    </div>

    
</Toolbar>

  
</AppBar>
    </>
);

export default TopNav;




