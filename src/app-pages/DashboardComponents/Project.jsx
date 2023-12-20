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
            id: 1,
          name: "Projects name 01",
        },
        {
            id: 2,
            name: "Projects name 01" },
        {
            id: 3,
          name: "Projects name 02" },
        {
            id: 4,
             name: "Projects name 03" },
        { 
           id: 5, 
            name: "Projects name 04" },
      ];

    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <div className=" col-12 rounded-4  py-4 px-4 " style={{backgroundColor:"#0A0C12"}}>
                        <h4 className="fw-medium text-white mb-3">Create Project</h4>
                        <div className="">
                        <p className=" mb-0" style={{color:"#A7AEBF"}}>Give a unique Project name</p>
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
                                <TableContainer className="d-flex flex-column" component={Paper} style={{backgroundColor:"#090B11" , borderRadius: "10px"}}>
                                    <Table>
                                        <TableHead sx={{ backgroundColor: "#272938", color: "white" }}>
                                        <TableRow className="rounded-4">
                                        <TableCell className="text-white w-100" style={{borderColor:"#090B11"}} >Projects</TableCell>
                                        
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {Data?.map((item) => (
                                            <TableRow className="my-3" key={item.id}>
                                            <TableCell className="text-white" style={{borderColor:"#090B11" , backgroundColor:"#0B121C"}}>
                                            <Link to={`/dataset/${item.id}`} className="text-white text-decoration-none">
                      {item.name}
                    </Link>
                                                </TableCell>
                                            
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                    <div className="mt-auto d-flex justify-content-between px-3 text-white paginate-wrapper py-3"> 
                                        <h6 style={{color: "#2C9BF6"}}><span>7</span> Projects</h6>
                                        <Pagination count={5} size="small" style={{ color: 'white' }}  />   
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