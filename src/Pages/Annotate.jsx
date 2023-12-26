import React, { useState, useEffect , useRef } from 'react';
import { fabric } from 'fabric';
import TopNav from '../AnnotateLayout/TopNav';
import SideNav from '../AnnotateLayout/SideNav';
import lung from '../assets/lung.png';
import RightNav from '../AnnotateLayout/RightNav';
import { useDispatch, useSelector } from 'react-redux';
import { updateCanvas } from '../redux/canvasActions';


const Annotate = () => {
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
      backgroundColor: "#fff",
      selection: false,
    });

    newCanvas.on("selection:created", () => {
      const selectedObject = newCanvas.getActiveObject();
      // console.log("Object selected:", selectedObject);
      // You can add the selected object to the canvas or perform other actions.
      // newCanvas.add(selectedObject);
    });

    fabric.Image.fromURL(lung, (img) => {
      img.scaleToWidth(containerRef.current.offsetWidth);
      img.scaleToHeight(containerRef.current.offsetHeight);
    
      newCanvas.setBackgroundImage(
        img.toDataURL(), // Convert the fabric.Image to a data URL
        newCanvas.renderAll.bind(newCanvas), // Render callback
        {
          // Optionally add optional settings here
          backgroundImageOpacity: 0.5,
          backgroundImageStretch: false,
          backgroundPosition: 'center',
        }
        
      );
    });


    
    return newCanvas;
  }

  const handleJson = () => {
    console.log(canvas);
    console.log(canvas.toJSON());
  }


  return (
    <>
      <div>
        <TopNav />
        <SideNav />
        <RightNav />
      </div>
      <button id="to-json" onClick={handleJson}>Json</button>
      <div ref={containerRef} id="canvasContainer">
        <canvas id="c" style={{ width: '100%', height: '100%' }} />
      </div>
    </>
  );
};

export default Annotate;
