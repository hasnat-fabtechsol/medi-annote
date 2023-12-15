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
  import Input from '@mui/material';
  import CloudUploadIcon from '@mui/icons-material/CloudUpload';
  import IconButton from '@mui/material/IconButton';
  import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
  import TextField from '@mui/material/TextField';




const Dataset = () => {
  
        const handleFileUpload = (event) => {
          // Handle file upload logic here
          console.log(event.target.files);
        };

    
        

    const Data = [
        {
          name: "Lung Dataset",
          label: "Label 01"
        },
        { 
            name: "Brain Dateset",
            label:"Label 02"


         },
        { name: "X-ray Dataset",
          label:"label 03"
         },
      
      ];
    return (
        <div className="">
            <div className="container  px-3">
                <div className="row">
                <div className=" col-12 rounded-4  py-4 px-4 " style={{backgroundColor:"#0A0C12"}}>
                    <h4 className="fw-medium text-white mb-3">Dataset</h4>
                    <div className="">
                    <p className="text-white mb-0">Upload a dataset</p>
                    <div className="d-flex flex-lg-row flex-column align-items-start justify-content-start gap-2">
                    <div className="col-lg-10 col-12">
                    <form action="" className="">
                        <div className='d-flex flex-md-nowrap flex-wrap align-items-center gap-3 mb-3'>
                            <div className="bg-gray rounded-3 w-75 p-2" style={{backgroundColor:"#212121"}} >
                                <Button
                                    variant="contained"
                                    component="label"
                                    style={{borderRadius:"50%", backgroundColor:"#090B11" , minWidth:"16px" , maxWidth:"20px" }}
                                
                                >
                                    <AddOutlinedIcon style={{ fontSize: '18px', color: 'white' ,  }} />
                                        <input
                                        type="file"
                                        placeholder='Upload File'
                                        hidden
                                        onChange={handleFileUpload}
                                        />
                                        
                                </Button>
                                <span className="text-white ms-2">Select File</span>
                            </div>
                            <Button
                                variant="contained"
                                component="label"
                                startIcon={<CloudUploadIcon />
                            }
                                style={{width:"200px",padding:"8px 24px" , backgroundColor:"#2C9BF6" , borderRadius:"10px" , textTransform:"capitalize"}}
                            >
                                Upload 
                                
                            </Button>
                        </div>
                        <div className='d-flex flex-md-nowrap flex-wrap align-items-center gap-3'>
                       
                            <TextField
                                type="text"
                                variant="outlined"
                                className="w-75"
                                placeholder="Type Here"
                                InputProps={{
                                style: {
                                    backgroundColor: "#212121",
                                    color: 'white',
                                    borderRadius: '10px',
                                    outline: 'none',
                                    boxShadow: 'none',
                                    height: '45px'
                                }
                                }}
                              
                            />
                        <Button
                            type="submit"
                            variant="contained"
                            className="px-5 py-2 text-white"
                            style={{ backgroundColor: "#2D9BF6" , width:"200px" , textTransform:"capitalize" , borderRadius:"10px" }}
                        > 
                            Add Label
                        </Button>

                        </div>


                       

      
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
                <TableContainer className="d-flex flex-column" component={Paper} style={{backgroundColor:"#090B11" , borderRadius: "10px"}}>
                <Table>
                    <TableHead sx={{ backgroundColor: "#272938", color: "white" }}>
                    <TableRow className="rounded-4" style={{borderColor:"#090B11" ,  borderBottomWidth:"1px"}}>
                    <TableCell className="text-white  px-4 border-0"  >Dataset</TableCell>
                    <TableCell className="text-white  px-4 border-0"  >Label</TableCell>
                    
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {Data?.map((item) => (
                        <TableRow className="my-3" key={item.id}  style={{borderColor:"#090B11" , borderBottomWidth:"1px", backgroundColor:"#0B121C"}}>
                        <TableCell className="text-white  px-4 my-1 border-0"  >{item.name}</TableCell>
                        <TableCell className="text-white  px-4 my-1 border-0" >{item.label}</TableCell>
                        
                        
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

export default Dataset;