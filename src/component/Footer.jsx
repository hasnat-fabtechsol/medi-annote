import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
    <>
       <footer
        className=" text-dark z-3 position-relative  p-1 py-3"
          style={{backgroundColor:"#181922"}}
      >
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
 
            <div>
                <Link style={{fontSize:"25px"}} className=" ms-2 text-white fs-bold text-decoration-none" to="/">
                    MediAnnote
                </Link>
            </div>

            <div className=" text-center" style={{color:"#787A8D"}}>
            <p className='m-0'>Copyright  &copy; 2021 CrypCoin. All rights reserved</p>
            </div>
        </div>
      

      </footer> 

    </>
);

export default Footer;