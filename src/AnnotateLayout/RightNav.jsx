import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from '@mui/material/Button';
import { FaUserCircle, FaShoppingBag, FaUserCheck, FaCog } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { logout } from '../../redux/counterSlice'
import { buttonStyle, listItemStyle } from "./SideNavStyles";
import { LensTwoTone, PermIdentity, Settings } from "@mui/icons-material";
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import InventoryIcon from '@mui/icons-material/Inventory';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import { logout } from "../redux/authSlice";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { PiNotebookLight } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { RxCursorArrow } from "react-icons/rx";
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { useLocation } from "react-router-dom";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { fabric } from 'fabric';
import { useSelector } from 'react-redux';
import utils from '../modules/canvasUtils';



const drawerWidth = 270;
const listItemData = [
  //   { label: "Classes & Students", icon: <svg id="Group_16" data-name="Group 16" xmlns="http://www.w3.org/2000/svg" width="29.35" height="29.35" viewBox="0 0 67.35 67.35">
  //   <path id="Shape" d="M51.564,67.35H15.785A15.8,15.8,0,0,1,0,51.565V15.786A15.8,15.8,0,0,1,15.785,0H51.564A15.8,15.8,0,0,1,67.35,15.786V51.565A15.8,15.8,0,0,1,51.564,67.35ZM15.785,5.261A10.537,10.537,0,0,0,5.261,15.786V51.565A10.537,10.537,0,0,0,15.785,62.089H51.564A10.537,10.537,0,0,0,62.089,51.565V15.786A10.537,10.537,0,0,0,51.564,5.261ZM52.748,56.825H46.961a2.63,2.63,0,1,1,0-5.261h5.787a2.63,2.63,0,1,1,0,5.261ZM49.2,46.569H27.229a2.632,2.632,0,0,1,0-5.264H49.2a2.632,2.632,0,0,1,0,5.264ZM25.123,15.916H14.075a2.63,2.63,0,1,1,0-5.261H25.123a2.63,2.63,0,1,1,0,5.261Z" transform="translate(0 0)" fill="#cf242a"/>
  //   <path id="Shape-2" data-name="Shape" d="M36.436,15.39H17.891a2.629,2.629,0,1,1,0-5.258H36.436a2.629,2.629,0,1,1,0,5.258ZM27.229,5.264H2.632A2.632,2.632,0,0,1,2.632,0h24.6a2.632,2.632,0,0,1,0,5.264Z" transform="translate(16.706 20.914)" fill="#cf242a"/>
  // </svg>
  //  },
  {
    label : "Anotations",
    link: `/`,
   
  },
  
  {
    label : "Enlarged Heart",
    link: "/",
   
  },
  {
    label : "Lung",
    link: "/",
    
  },
  {
    label : "Lung",
    link: "/",
    
  }, 


];


function RightNav(props ) {
  const [textInput, setTextInput] = useState('');
  const canvas = useSelector((state) => state.canvasState);
  console.log(canvas , "redux");
  const location = useLocation();
  const [show, setShow] = useState(false)
  const { window } = props;
  const navigate = useNavigate();

  const [tagList, setTagList] = useState([]);

  // empty array that will hold the canvas group objects
  const [canvasGroups, setCanvasGroups] = useState([]);


  // console.log(canvas , "redux");

  const handleButton = () => {
    const activeObject = canvas.getActiveObject();
  
    if (activeObject) {
      let textObject;
  
      if (activeObject.type === 'group') {
        // If the active object is a group, update the text content
        textObject = activeObject.item(1); // Assuming the text object is at index 1 in the group
        textObject.set('text', textInput);

        // get the text object's width and height
        const textWidth = textObject.width;
        const textHeight = textObject.height;

        // get the current position of the text object
        const textLeft = textObject.left;
        console.log(textLeft , "textLeft");
        
        textObject.left = textLeft - textWidth / 4;
       

        

     

        

        // textObject.left -=  textObject.width / 1.5 ;
      } else {
        // If the active object is not a group, create a new text object
        textObject = new fabric.Text(textInput, {
          left: activeObject.left + activeObject.width / 2,
          top: activeObject.top + activeObject.height / 2,
          fontFamily: 'arial black',
          fill: 'white',
          backgroundColor: '#4DB395',
          fontSize: 17,
          fontFamily: 'Helvetica',
          padding: 10,
          strokeWidth: 5, // Simulate padding with a border
        });
  
        textObject.left -= textObject.width / 2;
        textObject.top -= textObject.height / 2;
  
        const group = new fabric.Group([activeObject, textObject], {
          left: activeObject.left,
          top: activeObject.top,
        });
  
        canvas.remove(activeObject);
        canvas.add(group);
        canvas.setActiveObject(group);
      }
  
      return new Promise((resolve) => {
        canvas.requestRenderAll();
        resolve();
      });
    } else {
      return Promise.resolve();
    }
  };
  



  
  const handleAddTag = async () => {
    const activeObject = canvas.getActiveObject();
    const groups = canvas.getObjects().filter((o) => o.type === 'group');
    setCanvasGroups(groups);

    if(activeObject) {

      if (activeObject.type === 'group') {
        const groupIndex = groups.findIndex((g) => g === activeObject);
        console.log(groupIndex , "groupIndex"); 
        // remove the current group from the canvas


        if (groupIndex !== -1) {
          const group = groups[groupIndex];
          const textObject = group.item(1);
          const text = textObject.text;
          console.log(text, "text");
    
          // If there is already a tag for this group, update it
          setTagList((prevTags) => {
            const newTags = [...prevTags];
            newTags[groupIndex] = text;
            return newTags;
          });
    
          setText('');
        }

      } 
}
  };

  console.log(tagList , "taglist");
  
  const handleRemoveTag = (tagToRemove) => {
    setTagList((prevTags) => {
      const tagIndexToRemove = prevTags.indexOf(tagToRemove);
  
      if (tagIndexToRemove !== -1) {
        // Remove the associated group from the canvas
        const removedGroup = canvasGroups[tagIndexToRemove];
        if (removedGroup) {
          canvas.remove(removedGroup);
  
          // Update the canvasGroups state
          const newCanvasGroups = [...canvasGroups];
          newCanvasGroups.splice(tagIndexToRemove, 1);
          setCanvasGroups(newCanvasGroups);
        }
      }
  
      // Remove the tag from the tagList
      return prevTags.filter((tag) => tag !== tagToRemove);
    });
  };
  
  // put the tag text in the input field
  const putTagText = (tagText) => {
    setTextInput(tagText);
  };
  

  const [text, setText] = useState('');
 

 const handleInputChangeLocal = (e) => {
  const newText = e.target.value;
  setText(newText);
   // Call the parent callback function with the new text
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // First, handleButton is executed and awaited
  await handleButton();

  // After handleButton is completed, handleAddTag is executed
  handleAddTag();

  // Reset the input field
  setTextInput('');

  // Additional actions on form submission
};


  // const dispatch = useDispatch()
  const drawer = (
    <div className="px-3 d-flex justify-content-center text-center" style={{ backgroundColor: "#181922", height: "100vh" }}>
      <div className="zoom w-100">
        <div className=" py-2" >
          <div className="p-3  mx-auto" style={{ width: "6rem" }}>
            {/* <Link to='/'><img width={"100%"} className="" src={require("../assets/certificate-paper.png")} alt="" /></Link> */}
          </div>       
        </div>
        {location.pathname === "/annotate" ? (
        <Button
          className="px-3 py-3 rounded-3"
          sx={{
            color: "#F68D2C",
            marginTop: "50px",
            textTransform: "capitalize",
            backgroundColor: "#14151E",
          }}
        >
          <span className="me-2">
            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1088 3.54289L14.0158 1.42714C13.1096 0.516756 11.879 0.00344531 10.5945 0H4.81253C2.15586 0.00291211 0.00291211 2.15582 0 4.81249V16.1875C0.00291211 18.8442 2.15586 20.9971 4.81253 21H12.6875C15.3442 20.9971 17.4971 18.8442 17.5 16.1875V6.92737C17.5033 5.65938 17.0029 4.44195 16.1088 3.54289ZM14.875 16.1875C14.875 17.3956 13.8956 18.375 12.6875 18.375H4.81253C3.60441 18.375 2.62504 17.3956 2.62504 16.1875V4.81249C2.625 3.60437 3.60441 2.625 4.81253 2.625H9.62501V4.81249C9.62501 5.77898 10.4085 6.42017 11.375 6.42017H14.875L14.875 16.1875Z" fill="#F68D2C"/>
            </svg>
          </span>
          Send to Review
        </Button>
      ) : (
        <Link to="/review">
          <Button
            className="px-4 py-3 rounded-3"
            sx={{
              color: "#00AD26",
              marginTop: "50px",
              textTransform: "capitalize",
              backgroundColor: "#14151E",
            }}
            startIcon = {<CheckCircleOutlineRoundedIcon />}
          >
            Review
          </Button>
        </Link>
      )}
        <List className="pt-5 pb-5">
          {listItemData.map((value, i) => (
            <div key={i}>
              <div className=" my-0 m-2 " >
                <RenderItem value={value} i={i} style={{ fontSize: "2rem" }} />
              </div>
            </div>
          ))}
        </List>

        <Box sx={{backgroundColor:"#090B11" , padding:"0px 0px 10px" , borderRadius:"10px"}}>
            <form  onSubmit={handleSubmit}>
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              maxWidth: '300px',
              margin: 'auto',
              border: '1px solid #2C9BF6',
              borderRadius: '10px',
              padding:"5px",
              overflow: 'hidden',
              backgroundColor:"#212121"
            }}
          >
            <input className="no-focus border-0 w-75 shadow-none text-white" type="text" placeholder="Type a Text" style={{backgroundColor:"#212121"}}  value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
         />
            <Button type="submit"  variant="contained" id="enter-tag" color="primary" sx={{borderRadius:"10px" , textTransform:"capitalize" , backgroundColor:"#2C9BF6"}}>
              Enter
            </Button>
          </Box>
            </form>

           {/* Wrapper 1: Heading and Clear Label */}
      <Box sx={{display:"flex" , justifyContent:"space-between" , margin:"5px 10px", borderBottom:"1px solid #2C9BF6"}}>
        <Typography variant="h6">Tags</Typography>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setTagList([])}
          sx={{ border: "none" , color: "#2C9BF6" , textTransform:"capitalize" , "&:hover": { border: "none" }}}
        >
          Clear
        </Button>
      </Box>  

       {/* Display Tags with Delete Buttons */}
      <Box sx={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap' ,margin:"5px 10px 20px" }}>
        {tagList.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onDelete={() => handleRemoveTag(tag)}
            onClick={() => putTagText(tag)}
            // hover color

            variant="outlined"
            sx={{ margin: '4px' , backgroundColor:"#2C9BF6" , color : "white" , border:"none" , ':hover': {
              backgroundColor: "#2C9BF6 !important" ,  // Change the background color on hover
              color: "white",             // Change the text color on hover
              // Add more styles for hover effect if needed
            }, }}
            deleteIcon={<IconButton size="small" edge="end"><ClearIcon sx={{color:"#fff"}} /></IconButton>}
          />
        ))}
      </Box>   
        </Box>       
      </div>
      {/* {show &&
          <MuiDialog 
            // title={"Logout"}
            title={"Are you sure you want to Logout?"} 
            show={show}
            // onHide={show}
            Buttons={
              ()=>(<>
              <Button
              onClick={() => { setShow(false); }}
              >Cancel
              </Button>
                <Button  
                onClick={() => {
               dispatch(logout())
               navigate('/')
                 }}
                 color="error" variant="contained">
                  Logout
                </Button>
              </>
              )
            }
            />
          } */}
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      className=""
      component="nav"
      sx={{
        width: { md: drawerWidth },
        flexShrink: { md: 0 },
        bgcolor: "#181922",
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.

        }}
        anchor="right"
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "#181922",
            color: "#AFB7BE",
            zIndex: { md: 1400, xs: 1400 },
           
            
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer

        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            bgcolor: "#181922",
            color: "#AFB7BE",
            width: drawerWidth,
            zIndex: { md: 1100, xs: 1200 },
            right: "0px",
            left: "auto"
          },
        }}
        open
      >
        {drawer}
      </Drawer>

    </Box>
  );
}

RightNav.propTypes = {
  window: PropTypes.func,
};

export default RightNav;

const RenderItem = ({ value, i }) => {
  return (
    value.link ? <ListItem
      key={i}
      component={NavLink}
      to={value?.link || ""}
      disablePadding
      sx={listItemStyle}
      
      
    >
      <ListItemButton
        className="list-item list_text p-0 "
        sx={{ ...buttonStyle, "&:hover": { backgroundColor: "" } }}
      >
        
        <ListItemText className="w-100 text-capitalize" primary={<Button variant="body1" style={{width:"100%" ,fontSize: 16, color: "#2C9BF6" ,  backgroundColor: "#14151E" , textTransform:"capitalize", borderRadius:"10px"  }} title={value.label}>{value.label}</Button>} />
      </ListItemButton>
    </ListItem> :

      <ListItemButton className="list-item list_text no_link_list_item p-0"
        sx={{ ...buttonStyle, "&:hover": { backgroundColor: "" } }}
      >
        <ListItemIcon className="myIconClass p-2 rounded-2" sx={{ color: "#A7AEBF", padding:"8px" , borderRadius:"8px" }}>{value.icon}</ListItemIcon>
        <ListItemText className="" primary={<Typography variant="body2" style={{ fontSize: 16, color: "#A7AEBF", fontWeight: "bold" }} title={value.label}>{value.label}</Typography>} />
      </ListItemButton>
  );
};
