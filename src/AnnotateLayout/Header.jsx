import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

import RightNav from './RightNav';

import SideNav from './SideNav';

function Header(props) {
 const [mobileOpen, setMobileOpen] = useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <div className='navigation'>
            <Navbar handleDrawerToggle={handleDrawerToggle} />
            <RightNav mobileOpen={mobileOpen} handleDrawerToggle={() => handleDrawerToggle()}/>
           
        <SideNav />
           
            {/* <SideNav  /> */}

        </div>



    );
}

export default Header;
