import React from 'react'

import {
  Outlet,
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";


const WebLayout = () => {
  return (
    <div className="overflow-auto">
     
  <nav className="navbar navbar-expand-lg navbar-light navbg  "  style={{backgroundColor:"#090B11",color:"white",zIndex:"999"}}>
  <div className="container  shrink2 my-2">
   

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
    
    <button
      className="navbar-toggler navbar-togl-btn"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className=" navbar-toggler-icon text-white"></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
     
      <div className="d-flex justify-content-end mx-1 w-100">
        {/* <div className="col-lg-12 d-flex justify-content-end align-items-center mb-3 mb-lg-0 text-white gap-2"> */}
        <ul className="navbar-nav mb-2 mb-lg-0">
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
            to="/sign-in"
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
            to="/"
            title="ABout us"
            style={{ fontSize: '16px' , padding:"9px ", maxWidth:"fit-content",marginInline:"30px"}}
           
          >
            sign up
          </NavLink>
         
  
        </li>
  
    
      </ul>
        {/* </div> */}
      </div>
    </div>
  </div>
</nav>

         <main className='' style={{height:"calc(100vh - 144px)"}} >
                <div className=''>
                    <Outlet />
                </div>
            </main>


       <footer
        className=" text-dark  w-100 z-3 position-fixed left-0 right-0 bottom-0 flex-wrap  p-2 py-3"
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
        
    </div>
  )
}

export default WebLayout