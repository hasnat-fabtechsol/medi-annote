import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import TopNav from '../AnnotateLayout/TopNav';
import SideNav from '../AnnotateLayout/SideNav';

const initCanvas = (canvasId) => {
  const newCanvas = new fabric.Canvas(canvasId, {
    height: 700,
    width: 1899 / 2,
    preserveObjectStacking: true,
    backgroundColor: 'white',
  });



  // Set initial drawing mode to false
  newCanvas.isDrawingMode = false;

  // Enable object selection
  newCanvas.selection = true;

  // Event listener for after render
  newCanvas.on('after:render', () => {
    console.log('Canvas is rendered');
    // Additional actions after rendering
  });

  return newCanvas;
};

const Annotate = () => {
  const [canvasData, setCanvas] = useState(null);
  
useEffect(() => {
  
    const canvas = initCanvas('c');

    // Event listener for mouse up
    canvas.on('mouse:up', (e) => {
      console.log('Mouse up event:', e);
      console.log('Canvas objects:', canvas.getObjects());
    });

    

    

    const drawingModeEl = document.getElementById('drawing-mode');
     drawingModeEl.addEventListener('click', (e) => {
      e.preventDefault();
      canvas.isDrawingMode = true;
      // pencil width
      canvas.freeDrawingBrush.width = 5;
      canvas.freeDrawingBrush.color = 'red';
      
    }

    );

    const moveToolEl = document.getElementById('move-tool');
    moveToolEl.addEventListener('click', (e) => {
      e.preventDefault();
      canvas.isDrawingMode = false;
      canvas.selection = true;
    });

    canvas.renderAll();
    setCanvas(canvas);


}, []);  

  
  
    
  

 
  
  

  return (
    <>
      <div>
        <TopNav />
        <SideNav />
        
        {/* Your buttons and other UI elements */}
      </div>
      <div className="p-2 rounded-4" style={{ backgroundColor: '#181922' }}>
        <div
          className="justify-content-center vh-75 align-items-center"
          id="canvasContainer"
          style={{ width: '100%' }}
        >
          <canvas  id="c" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </>
  );
};

export default Annotate;
