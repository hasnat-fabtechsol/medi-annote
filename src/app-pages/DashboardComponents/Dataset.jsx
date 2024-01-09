import React, { useState } from 'react';
import { Button, TextField, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Grid, Pagination , Checkbox } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Dataset = () => {
  const [images, setImages] = useState([]);
  const [imagesName, setImagesName] = useState([]);
  const [labels, setLabels] = useState([]);
  const [Data, setData] = useState([
    // Example initial row
    {
      id: 1,
      status: "Inactive",
      imageNames: ["SampleImage.jpg"]
    },
  ]);

   // State to manage selected rows
   const [selectedRows, setSelectedRows] = useState([]);

   const handleCheckboxChange = (id) => {
     setSelectedRows((prevSelectedRows) => {
       if (prevSelectedRows.includes(id)) {
         return prevSelectedRows.filter((rowId) => rowId !== id);
       } else {
         return [...prevSelectedRows, id];
       }
     });
   };

  const handleFileUpload = (event) => {
    const selectedImages = Array.from(event.target.files);
    const imageNames = selectedImages.map((image) => image.name);

    setImagesName(imageNames);
    setImages(selectedImages);

    // Add a new row to Data with the uploaded image name and default status
    // setData((prevData) => [
    //   ...prevData,
    //   {
    //     id: prevData.length + 1, // Unique id for the new row
    //     status: "Inactive", // Default status
    //     imageNames: imageNames,
    //   },
    // ]);
  };

  const setDataHandler = (event) => {
    event.preventDefault();

    // Add a new row to Data with the default status and empty imageNames
    setData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1, // Unique id for the new row
        status: "Inactive", // Default status
        imageNames: imagesName,
      },
    ]);
  };

  const handleLabelUpload = (event) => {
    const selectedLabels = Array.from(event.target.files);
    console.log(selectedLabels);
    const labelNames = selectedLabels.map((label) => label.name);
    console.log(labelNames);

    // get the text inside the file
    const reader = new FileReader();
    reader.readAsText(selectedLabels[0]);
    reader.onload = function () {
      console.log(reader.result);
        const labels = reader.result.split("\n");
        
        setLabels(labels);
    };

    console.log(labels);
    
  };

  

  return (
    <div className="">
      <div className="container px-3">
        <div className="row">
          <div className="col-12 rounded-4 py-4 px-4" style={{ backgroundColor: "#0A0C12" }}>
            <h4 className="fw-medium text-white mb-3">Dataset</h4>
            <div className="">
              <p className="text-white mb-0">Upload a dataset</p>
              <div className="d-flex flex-lg-row flex-column align-items-start justify-content-start gap-2">
                <div className="col-lg-10 col-12">
                  <form action="" className="">
                    <div className='d-flex flex-md-nowrap flex-wrap align-items-center gap-3 mb-3'>
                      <div className="bg-gray rounded-3 w-75 p-2" style={{ backgroundColor: "#212121" }} >
                        <Button
                          variant="contained"
                          component="label"
                          style={{ borderRadius: "50%", backgroundColor: "#090B11", minWidth: "16px", maxWidth: "20px" }}
                        >
                          <AddOutlinedIcon style={{ fontSize: '18px', color: 'white' }} />
                          <input
                            type="file"
                            placeholder='Upload File'
                            hidden
                            onChange={handleFileUpload}
                            multiple
                            accept=".jpeg, .jpg, .png, .dcm"
                          />
                        </Button>
                        {images.length > 0 ? (
                          images.map((image) => (
                            <img
                              key={image.name}
                              src={URL.createObjectURL(image)}
                              alt={image.name}
                              style={{ height: "40px" }}
                            />
                          ))
                        ) : (
                          <span className="text-white ms-2">Select File</span>
                        )}
                      </div>
                      <Button
                        variant="contained"
                        component="label"
                        startIcon={<CloudUploadIcon />}
                        onClick={setDataHandler}
                        style={{ width: "200px", padding: "8px 24px", backgroundColor: "#2C9BF6", borderRadius: "10px", textTransform: "capitalize" }}
                      >
                        Upload
                      </Button>
                    </div>
                    <div className='d-flex flex-md-nowrap flex-wrap align-items-center gap-3'>
                        
                        <Button
                        variant="contained"
                        component="label"
                        startIcon={<CloudUploadIcon />}
                        style={{ width: "200px", padding: "8px 24px", backgroundColor: "#2C9BF6", borderRadius: "10px", textTransform: "capitalize" }}
                        >
                            <input
                        type="file"
                        placeholder='Upload File'
                        hidden
                        onChange={handleLabelUpload}
                        accept=".txt" // Accept only text files
                        />
                        Upload Text File
                        </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex h-100 py-y mb-4 px-0" style={{ overflow: "auto" }}>
          <div className="col-lg-12 h-100 col-md-12 col-12 ">
            <div className="mt-3 h-100">
            <Grid item xs={12} className="mt-3" sx={{ overflowY: "auto" }} >
        <TableContainer className="d-flex flex-column" component={Paper} style={{ backgroundColor: "#090B11", borderRadius: "10px" }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#272938", color: "white" }}>
              <TableRow className="rounded-4" style={{ borderColor: "#090B11", borderBottomWidth: "1px" }}>
                <TableCell className="text-white px-4 border-0">
                  <Checkbox
                    color="primary"
                    onChange={() => {
                      // Handle select all logic if needed
                      

                    }}
                  />
                </TableCell>
                <TableCell className="text-white px-4 border-0">Status</TableCell>
                <TableCell className="text-white px-4 border-0">Dataset</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Data?.map((item) => (
                <TableRow className="my-3" key={item.id} style={{ borderColor: "#090B11", borderBottomWidth: "1px", backgroundColor: "#0B121C" }}>
                  <TableCell className="text-white px-4 my-1 border-0">
                    <Checkbox
                      color="primary"
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </TableCell>
                  <TableCell className="text-white px-4 my-1 border-0">{item.status}</TableCell>
                  <TableCell className="text-white px-4 my-1 border-0">{item.imageNames.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-auto d-flex justify-content-between px-3 text-white py-3">
            {/* <h6 style={{ color: "#2C9BF6" }}><span>{Data.length}</span> Projects</h6> */}
            {/* <Pagination count={5} size="small" style={{ color: 'white' }} /> */}
          </div>
        </TableContainer>
      </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataset;
