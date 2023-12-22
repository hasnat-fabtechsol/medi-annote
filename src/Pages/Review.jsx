import React from "react";
import TopNav from '../AnnotateLayout/TopNav';
import SideNav from '../AnnotateLayout/SideNav';



const Review = () => (
    <>
      <div>
      <TopNav  />
        <SideNav  />
      </div>
       <div >
            <div className="p-3 rounded-4 position-relative overflow-hidden text-center" style={{backgroundColor:"#181922"}}>
                <button className="btn rounded-3 text-white position-absolute " style={{   backgroundColor:"#00AD26" , top:"50px" , left:"50%"}}>Complete</button>
                <div className="image-wrapper " >
                    <img className="rounded-4" src={require('../assets/lung.png')} alt="image" style={{objectFit:"cover" , border:"1px solid #00AD26"}}/>
                </div>
            </div>
       </div>
    </>
);

export default Review;