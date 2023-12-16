import React from "react";



const Annotate = () => (
    <>
       <div >
        <div className="container">
            <div className="image-wrapper p-2 rounded-4" style={{backgroundColor:"#181922"}}>
                <img src={require('../assets/lung.png')} alt="image" style={{objectFit:"cover"}}/>
            </div>
        </div>
       </div>
    </>
);

export default Annotate;