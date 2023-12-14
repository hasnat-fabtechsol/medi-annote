import React from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { BorderTop } from 'react-bootstrap-icons';
import TableMui from "../../mui/TableMui";
import {
    Grid,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Pagination,
  } from "@mui/material";




const Project = () => {
    const Data = [
        {
          name: "Projects name 01",
        },
        { name: "Projects name 01" },
        { name: "Projects name 01" },
        { name: "Projects name 01" },
      
      ];
    return (
        <div className="">
            <div className="container  px-3">
                <div className="row">
                <div className=" col-12 rounded-4  py-4 px-4 " style={{backgroundColor:"#0A0C12"}}>
                    <h4 className="fw-medium text-white mb-3">Create Project</h4>
                    <div className="">
                    <p className="text-white mb-0">Give a unique Project name</p>
                    <div className="d-flex flex-lg-row flex-column align-items-start justify-content-start gap-2">
                    <div className="col-lg-8">
                        <form action="" className="d-flex align-items-center gap-3">
                        <div  className=" mb-lg-0 mb-1 w-100">
                    
                        <input
                            type="text "
                            class="form-control custom-width border-0 text-white  rounded-3   w-100"
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
                

                <div className="d-flex h-100 py-y mb-4 px-0" style={{ overflow: "auto" }}>
                    <div className="col-lg-12 h-100 col-md-12 col-12 ">
                        <div className="mt-3 h-100">
                            {/* TableMui */}
                            {/* <TableMui
                            styleTableThead={{
                                "& th": {
                                color: "white",
                                backgroundColor: "#272938",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                                borderColor: "#090B11",
                                },
                            }}
                            styleTableContainer={{
                                borderRadius: "10px",
                                backgroundColor: "#090B11",
                                height:"calc(100vh - 380px)",
                                display:"flex",
                                flexDirection:"column",
                            }
                            }
                            th={{
                                name: "Projects"
                            }}

                            //   columns={columns}
                            td={Data}


                            /> */}

        <Grid item xs={12} className="mt-3" sx={{ overflowY: "auto" }}>
                <TableContainer className="d-flex flex-column" component={Paper} style={{backgroundColor:"#090B11" , borderRadius: "10px", height:"calc(100vh - 320px)",}}>
                <Table>
                    <TableHead sx={{ backgroundColor: "#272938", color: "white" }}>
                    <TableRow className="rounded-4">
                    <TableCell className="text-white w-100" style={{borderColor:"#090B11"}} >Projects</TableCell>
                    
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {Data?.map((item) => (
                        <TableRow className="my-3" key={item.id}>
                        <TableCell className="text-white" style={{borderColor:"#090B11" , backgroundColor:"#0B121C"}}>{item.name}</TableCell>
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <div className="mt-auto d-flex justify-content-between px-3 text-white py-3"> 
            <h6 style={{color: "#2C9BF6"}}><span>7</span> Projects</h6>
            <Pagination count={10} size="small" style={{ color: 'white' }}  />
            </div>
                </TableContainer>
                
            </Grid>

                        

                        </div>
                    
                    
                    
                    </div>
                </div>
                </div>
            </div>   
        </div>
    );
};

export default Project;