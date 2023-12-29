import React, { useState, useEffect , useRef } from 'react';
import { fabric } from 'fabric';
import "fabric-history";
import lung from '../assets/lung.png';
import RightNav from '../AnnotateLayout/RightNav';
import { useDispatch, useSelector } from 'react-redux';
import { updateCanvas } from '../redux/canvasActions';
import TopNav from '../AnnotateLayout/TopNav';


const Review = () => {
  const [canvasData, setCanvas] = useState(null);
  const containerRef = useRef(null);
  const canvas  = useSelector(state => state.canvasState);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(updateCanvas(initCanvas())); 
  }, []); // Empty dependency array to run the effect only once

  const initCanvas = () => {
    const newCanvas = new fabric.Canvas("c", {
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
      backgroundColor: "#f2f2f2",
      selection: false,
      strokeWidth: 5,
      stroke: 'red',
      cornerColor: 'green',
      cornerSize: 10,
      snapAngle: 45,
    });

    newCanvas.on("selection:created", () => {
      const selectedObject = newCanvas.getActiveObject();
      // console.log("Object selected:", selectedObject);
      // You can add the selected object to the canvas or perform other actions.
      // newCanvas.add(selectedObject);
    });

    fabric.Image.fromURL(lung, (img) => {
      img.scaleToWidth(containerRef.current.offsetWidth/img.width);
      img.scaleToHeight(containerRef.current.offsetHeight);
      img.scaleX = containerRef.current.offsetWidth/img.width;
      img.scaleY = containerRef.current.offsetHeight/img.height;
      
    
      newCanvas.setBackgroundImage(
        img.toDataURL(), // Convert the fabric.Image to a data URL
        newCanvas.renderAll.bind(newCanvas), // Render callback
        {
          // Optionally add optional settings here
          backgroundImageOpacity: 0.5,
          backgroundImageStretch: false,
          backgroundPosition: '50% 0%',
          stroke: 'red',

        }
        
      );
    });


    
    return newCanvas;
  }

  const handleJson = () => {
    // console.log(canvas);
    // console.log(canvas.toJSON());
  }

  const saveData = () => {
    dispatch(updateCanvas(canvas));
    console.log(canvas);
  }
  return (
    <>
      <div>
      <TopNav  />
      
      </div>
       <div >
            <div className="p-3 rounded-4 position-relative overflow-hidden text-center" style={{backgroundColor:"#181922"}}>
                <button className="btn rounded-3 text-white position-absolute " style={{   backgroundColor:"#00AD26" , top:"50px" , left:"50%"}}>Complete</button>
                <div ref={containerRef} id="canvasContainer">
        <canvas id="c" style={{ width: '100%', height: '100%' }} />
      </div>
            </div>
       </div>
    </>
);
};

export default Review;