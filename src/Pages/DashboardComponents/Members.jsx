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
  import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const Members = () => {
  
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
      setRole(event.target.value);
    };

    
        

    const Data = [
        {
          name: "Mona",
          email: "mona@gmail.com",
            Role:"Annotator",
            action:""
          
        },
        { 
            name: "Mona",
            email: "mona@gmail.com",
            Role:"Review",
            action:""


         },
        { name: "Mona",
        email: "mona@gmail.com",
        
        Role:"Admin",
        action:""
         },
      
      ];
    return (
        <div className="">
            <div className="container  px-3">
                <div className="row">
                <div className=" col-12 rounded-4  py-4 px-4 " style={{backgroundColor:"#0A0C12"}}>
                    <h4 className="fw-medium text-white mb-3">Project Members</h4>
                    <div className="">
                   
                    <div className="d-flex flex-lg-row flex-column align-items-start justify-content-start gap-2">
                    <div className="col-lg-10 col-12">
                    <form action="" className="">
                       
                        <div className='d-flex align-items-center gap-3'>
                       
                            <TextField
                                type="email"
                                variant="outlined"
                                className="w-75"
                                placeholder="Type Here"
                                InputProps={{
                                style: {
                                    backgroundColor: "#212121",
                                    color: 'white',
                                    borderRadius: '16px',
                                    outline: 'none',
                                    boxShadow: 'none',
                                    height: '45px'
                                }
                                }}
                              
                            />
                            <FormControl className='rounded-4'  style={{minWidth:"140px" , color:"white", backgroundColor:"#212121"}}>
                                <InputLabel id="demo-simple-select-label text-white" style={{color:"#2C9BF6"}}>Select</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={role}
                                label="Select"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Annotator</MenuItem>
                                <MenuItem value={20}>Review</MenuItem>
                                <MenuItem value={30}>Admin</MenuItem>
                                </Select>
                            </FormControl>
                        <Button
                            type="submit"
                            variant="contained"
                            className="px-5 py-2 text-white"
                            style={{ backgroundColor: "#2D9BF6" , width:"240px" , textTransform:"capitalize" , borderRadius:"16px" }}
                        > 
                            Send Invitation
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
                            <TableMui
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
                                name: "Username ",
                                email:"Email",
                                Role:"Role",
                                action:"Action"
                            }}

                            //   columns={columns}
                            td={Data}


                            />

        

                        

                        </div>
                    
                    
                    
                    </div>
                </div>
                </div>
            </div>   
        </div>
    );
};

export default Members;