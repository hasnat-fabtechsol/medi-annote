import React from "react";



const Annotate = () => (
    <>
       <div >
        <div className="container">
            <div className="p-2 rounded-4" style={{backgroundColor:"#181922"}}>
            <div className="image-wrapper w-100 position-relative   rounded-4 " style={{  paddingBottom:"54%"}}>
                <img className="w-100 h-100 position-absolute" src={require('../assets/lung.png')} alt="image" style={{objectFit:"cover"}}/>
            </div>
            </div>
            
        </div>
       </div>
    </>
);

export default Annotate;