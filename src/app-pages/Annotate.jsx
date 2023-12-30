import React, { useState, useEffect , useRef } from 'react';
import { fabric } from 'fabric';
import "fabric-history";
import lung from '../assets/lung.png';
import RightNav from '../AnnotateLayout/RightNav';
import { useDispatch, useSelector } from 'react-redux';
import { updateCanvas } from '../redux/canvasActions';
import TopNav from '../AnnotateLayout/TopNav';

const Annotate = () => {
  const [canvasData, setCanvas] = useState(null);
  const containerRef = useRef(null);
  const canvas  = useSelector(state => state.canvasState);
  const dispatch = useDispatch();

  useEffect(() => {
   // Initialize canvas when component mounts
   const newCanvas = initCanvas();
   // Load canvas data from local storage
   const storedCanvasData = getCanvasStateFromLocalStorage();
   console.log(storedCanvasData , 'storedCanvasData');

   // Update the canvas with the loaded data
   if (storedCanvasData) {
     newCanvas.loadFromJSON(storedCanvasData, () => {
       newCanvas.renderAll();
     });
   }

   // Update the Redux store with the new canvas instance
   dispatch(updateCanvas(newCanvas));  
  }, []); // Empty dependency array to run the effect only once

  const initCanvas = () => {
    const newCanvas = new fabric.Canvas("c", {
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
      backgroundColor: "#f2f2f2",
      selection: false,
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
        }
        
      );
    });
    return newCanvas;
  }

  // Function to get canvas state from local storage
  const getCanvasStateFromLocalStorage = () => {
    const storedCanvasState = localStorage.getItem('myCanvas');
    return storedCanvasState ? JSON.parse(storedCanvasState) : null;
  };

  const handleJson = () => {
    // console.log(canvas);
    // console.log(canvas.toJSON());
  }

  // const saveData = () => {
  //   dispatch(updateCanvas(canvas));
  //   console.log(canvas);
  // }


  return (
    <>
      <TopNav />
      {/* <button id="to-json" onClick={handleJson}>Json</button> */}
      <div ref={containerRef} id="canvasContainer" className='vh-75'>
        <canvas id="c" style={{ width: '100%', height: '100%' }} />
      </div>
    </>
  );
};

export default Annotate;
