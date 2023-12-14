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
//   import search icon
import SearchIcon from '@mui/icons-material/Search';








const MemberPerformance = () => {
  
    

    
        

    const Data = [
        {
            teamMember: "Sunilreddy",
            label: "4",
            lastActivity: "1 Days ago",
            timePerLabel: "25m.33sec",
            reviewAcceptancePercent: "10",
            reviewAcceptanceDigit: "9",
            consensue: "100%"

        },
        {
            teamMember: "Sunilreddy",
            label: "4",
            lastActivity: "1 Days ago",
            timePerLabel: "25m.33sec",
            reviewAcceptancePercent: "10",
            reviewAcceptanceDigit: "9",
            consensue: "100%"

        },
        {
            teamMember: "Sunilreddy",
            label: "4",
            lastActivity: "1 Days ago",
            timePerLabel: "25m.33sec",
            reviewAcceptancePercent: "10",
            reviewAcceptanceDigit: "9",
            consensue: "100%"

        },
        {
            teamMember: "Sunilreddy",
            label: "4",
            lastActivity: "1 Days ago",
            timePerLabel: "25m.33sec",
            reviewAcceptancePercent: "10",
            reviewAcceptanceDigit: "9",
            consensue: "100%"

        }
      
      ];
    return (
        <div className="px-3">
            <div className="container ">
                <div className="row">
                <div className=" col-12 rounded-4  py-4 px-4 " style={{backgroundColor:"#0A0C12"}}>
                    <h4 className="fw-medium text-white mb-3">Search</h4>
                    <div className="">
                   <p>Search Member Statistic</p>
                    <div className="d-flex flex-lg-row flex-column align-items-start justify-content-start gap-2">
                    <div className="col-lg-8 col-12">
                    <form action="" className="">
                       
                        <div className='d-flex flex-wrap align-items-center gap-3'>
                       
                            <TextField
                                type="search"
                                variant="outlined"
                                className="w-75"
                                placeholder="Search"
                                InputProps={{
                                style: {
                                    backgroundColor: "#212121",
                                    color: 'white',
                                    borderRadius: '16px',
                                    outline: 'none',
                                    boxShadow: 'none',
                                    height: '45px'
                                },
                                startAdornment: (
                                    <SearchIcon style={{ color: "#A7AEBF" }} />
                                )


                                }}
                              
                            />
                            

                        <Button
                            type="submit"
                            variant="contained"
                            className="px-5 py-2 text-white"
                            style={{ backgroundColor: "#2D9BF6" , width:"240px" , textTransform:"capitalize" , borderRadius:"8px" }}
                        > 
                            Search
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
                                teamMember: "Team Member",
                                label: "Label",
                                lastActivity: "Last Activity",
                                timePerLabel: "Time Per Label",
                                reviewAcceptancePercent: "Review Acceptance (%)",
                                reviewAcceptanceDigit: "Review Acceptance (0-9)",
                                consensue: "Consensue"
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

export default MemberPerformance;