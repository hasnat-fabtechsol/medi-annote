import React from 'react'

import {
  Outlet,
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";


const Layout = () => {
  return (
    <div className="">
     
  <nav className="navbar navbar-expand-lg navbar-light navbg  "  style={{backgroundColor:"#090B11",color:"white",zIndex:"999"}}>
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
  
    
      </ul>
        {/* </div> */}
      </div>
    </div>
  </div>
</nav>

         <main className='' style={{height:"70vh"}}>
                <div className=''>
                    <Outlet />
                </div>
            </main>


      {/* <footer
        className=" text-dark p-md-4 p-2"

      >
       
        <div>

        </div>
       

        <div className='row'>
            <div className='col-md-4 '>
                <p className='text_color'>&copy; 2023 Electrocoin d.o.o</p>
            </div>
            <div className=' col-md-4 d-flex justify-content-center  gap-2'>
            
            </div>
            
            <div className=' col-md-4 d-flex justify-content-center  gap-3'> 
            <p className='text_color'>
                Terms
            </p>
            <p className='text_color'>
                Privacy
            </p>
            <p className='text_color'>
                AMLTF
            </p>
            </div>
        </div>

        <div className="w-100 text-center">
          <p>All rights reserved Maintained & Developed by <Link to="https://fabtechsol.com/">Fabtechsol </Link>  &copy; 2023</p>
        </div>

      </footer> */}
        
    </div>
  )
}

export default Layout