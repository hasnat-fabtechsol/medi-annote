import React from "react";

const LabelDataset = () => (
    <>
       <div className="py-4 px-2" >
        <div className="container">
            <div className="top-search">
                <div className="row">
                    <div className=" col-12   " >
                        <div className="px-4 py-4 rounded-4 " style={{backgroundColor:"#0A0C12"}}>
                            <h4 className="fw-medium text-white mb-3">Create Project</h4>
                            <div className="">
                                <p className=" mb-0" style={{color:"#A7AEBF"}}>Search Dataset</p>
                                <div className="d-flex flex-lg-row flex-column align-items-start justify-content-start gap-2">
                                    <div className="col-lg-8 col-12">
                                        <form action="" className="d-flex flex-md-nowrap flex-wrap align-items-center gap-3">
                                        <div  className=" mb-lg-0 mb-1 w-75">
                                    
                                        <input
                                            type="text "
                                            class="form-control custom-width border-0 text-white  rounded-3  "
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
                    </div>
                </div>
            </div>
            <div className="search-results mt-4 rounded-4 overflow-hidden" style={{backgroundColor:"#090B11"}}>
                <div className="head py-3 px-4" style={{backgroundColor:"#272938"}}>
                    <h5 className="text-white">Search Result</h5>
                </div>
                <div className="search-body rounded-bottom-4  px-4 pt-4 pb-5 overflow-auto" style={{maxHeight:"400px"}}>
                    <div className=" width-wrapper d-flex flex-wrap" >
                        <div className="position-relative img-card" style={{paddingBottom:"13rem"}}>
                                <img className="w-100 position-absolute h-100 object-fit-cover rounded-4" src={require('../assets/lung.png')} alt="" />
                        </div>
                        <div className="position-relative img-card" style={{paddingBottom:"13rem"}}>
                                <img className="w-100 position-absolute h-100 object-fit-cover rounded-4" src={require('../assets/lung.png')} alt="" />
                        </div>
                        <div className="position-relative img-card" style={{paddingBottom:"13rem"}}>
                                <img className="w-100 position-absolute h-100 object-fit-cover rounded-4" src={require('../assets/lung.png')} alt="" />
                        </div>
                        <div className="position-relative img-card" style={{paddingBottom:"13rem"}}>
                                <img className="w-100 position-absolute h-100 object-fit-cover rounded-4" src={require('../assets/lung.png')} alt="" />
                        </div>
                        <div className="position-relative img-card" style={{paddingBottom:"13rem"}}>
                                <img className="w-100 position-absolute h-100 object-fit-cover rounded-4" src={require('../assets/lung.png')} alt="" />
                        </div>
                    </div>
                   
                </div>
                
            </div>
            
        </div>
       </div>
    </>
);

export default LabelDataset;