
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


const TopNav = () => (
    <>
   <AppBar position="" sx={{paddingTop:"80px" , backgroundColor:"transparent" , width:"80%" , boxShadow:"none" , margin:"auto"}}>
    <Toolbar sx={{justifyContent:"space-between"}}>
        <Box sx={{ display:"flex" , gap:"5px" }}>
            <IconButton>
            <ArrowLeftIcon />
            </IconButton>
            <IconButton>
            <ArrowRightIcon />
            </IconButton>

            <CachedIcon sx={{ fontSize: 40 , color:"white" }}/>
            <CachedIcon sx={{ fontSize: 40 , color:"white" }}/>
        </Box>
        <Box>
            <p><span>01</span>/<span>23</span></p>
        </Box>    

<Box sx={{ display:"flex" , gap:"5px" , alignItems:"center" }}>
<Avatar alt="Remy Sharp" src="https://picsum.photos/200/300/static/images/avatar/1.jpg" />

   <DeleteOutlineOutlinedIcon sx={{ fontSize: 24 , color:"#2C9BF6" }}/> 
   <DoneIcon sx={{ fontSize: 24 , color:"#2C9BF6" }}/>  
<Button
 
color="inherit">Contact</Button>
</Box>

      

    
</Toolbar>

  
</AppBar>
    </>
);

export default TopNav;




