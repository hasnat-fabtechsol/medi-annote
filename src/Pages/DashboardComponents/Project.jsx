import React from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { BorderTop } from 'react-bootstrap-icons';



const Project = () => {
    const Data = [
        {
          name: "Course Name",
        },
        { name: "Course Name" },
        { name: "Course Name" },
        { name: "Course Name" },
      
      ];
    return (
        <div>
            <div className="container p-lg-4 p-3">
        <div className="row">
          <div className=" col-sm-12 rounded-4  py-3 px-4" style={{backgroundColor:"#0A0C12"}}>
            <h4 className="fw-medium text-white mb-3">Create Project</h4>
            <div className="">
            <p className="text-white mb-0">Give a unique Project name</p>
            <div className="d-flex flex-lg-row flex-column align-items-start justify-content-start gap-2">
              <div className="col-lg-8">
                <form action="" className="d-flex align-items-center gap-3">
                <div  className=" mb-lg-0 mb-1 w-100">
               
                <input
                    type="text "
                    class="form-control custom-width   rounded-3   w-100"
                    placeholder="Type Here"
                    aria-label="Text"
                    style={{ backgroundColor: "#212121" , outline:"none" ,  boxShadow: 'none' , height:"52px"}}
                />
               
          
                    </div>
                    <input type="submit" className="btn px-5 py-2 text-white" value="Create Project"  style={{backgroundColor:"#2D9BF6"}} />
                </form>
            
              
              </div>
              
            </div>
          </div>
          </div>
          

          <div className="d-flex py-y mb-4 px-0" style={{ overflow: "auto" }}>
            <div className="col-lg-12 col-md-12 col-12 ">
             
              <div className=' rounded-4 overflow-auto inner-courses mt-3' style={{boxShadow:" 0px 0px 6px 3px rgba(0,0,0,0.1)" , backgroundColor:"#090B11"}}>
        <h4 className='px-4 py-3 text-white fw-medium' style={{backgroundColor:"#272938"}}>Projects</h4>
        {
          Data.map((e)=>( 
            <>
            <p className='px-4 py-3 m-0 text-white' style={{cursor:"pointer" , backgroundColor:"#0B121C"}}>{e.name}</p>
            <hr className='my-1' style={{BorderTop:"1px solid #fff"}} />
            </>
          ))
        }
         
      </div>
             
            </div>
          </div>
        </div>
      </div>   
        </div>
    );
};

export default Project;