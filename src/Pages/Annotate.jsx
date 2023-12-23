import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import TopNav from '../AnnotateLayout/TopNav';
import SideNav from '../AnnotateLayout/SideNav';
import lung from '../assets/lung.png';
import RightNav from '../AnnotateLayout/RightNav';

const Annotate = () => {
  const [canvasData, setCanvas] = useState(null);
  const [inputText, setInputText] = useState('');
 

  const handleInputChange = (text) => {

    setInputText(text);
  };
  const container = useRef(null);
  const fabric = window.fabric;

  const initCanvas = (canvasId) => {
    const newCanvas = new fabric.Canvas(canvasId, {
      height: container.current.clientHeight,
      width: container.current.clientWidth,
      preserveObjectStacking: true,
    });

    // Set initial drawing mode to false
    newCanvas.isDrawingMode = false;
    newCanvas.selection = true;

    // Event listener for after render
    newCanvas.on('after:render', () => {
      console.log('Canvas is rendered');
      // Additional actions after rendering
    });

    return newCanvas;
  };

  const addImageToCanvas = (canvasInstance) => {
    fabric.Image.fromURL(lung, function (img) {
      canvasInstance.add(
        img.set({
          left: 0,
          top: 0,
          angle: 0,
          width: canvasInstance.width - 20,
          height: canvasInstance.height,
          padding: 0,
          cornerSize: 10,
        })
      );
      canvasInstance.renderAll();
    });
  };

  const setupEventListeners = (canvasInstance) => {
    const drawingModeEl = document.getElementById('drawing-mode');
    drawingModeEl.addEventListener('click', (e) => {
      e.preventDefault();
      canvasInstance.isDrawingMode = true;
      // pencil width
      canvasInstance.freeDrawingBrush.width = 5;
      canvasInstance.freeDrawingBrush.color = 'red';
    });

    const addTextEl = document.getElementById('enter-tag');
    console.log(addTextEl, 'add text');
    addTextEl.addEventListener('click', (e) => {
      
      e.preventDefault();
      console.log("click");
      alert("");
      canvasInstance.isDrawingMode = false;
      canvasInstance.selection = false;
      const text = new fabric.IText(inputText, {
        left: 50,
        top: 50,
        fontFamily: 'arial black',
        fill: '#333',
        fontSize: 50,
      });
      canvasInstance.add(text);
      canvasInstance.renderAll();
    });


    console.log(inputText , "passed test");   

    const moveToolEl = document.getElementById('move-tool');
    moveToolEl.addEventListener('click', (e) => {
      e.preventDefault();
      canvasInstance.isDrawingMode = false;
      canvasInstance.selection = true;
    });

    const jsonEl = document.getElementById('to-json');
    jsonEl.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(canvasInstance.toJSON());
    });
  };


 

  

  useEffect(() => {
    const canvasInstance = initCanvas('c');
    addImageToCanvas(canvasInstance);
    setupEventListeners(canvasInstance);
   
    
    canvasInstance.renderAll();

    setCanvas(canvasInstance);
    console.log(canvasData, 'data');
  }, [fabric]);



  return (
    <>
      <div>
        <TopNav />
        <SideNav />
        <RightNav  onInputChange={handleInputChange}  />
        {/* Your buttons and other UI elements */}
      </div>
      <button id="to-json">Json</button>
      <button id="add-text">Add Text</button>
      <div className="p-2 rounded-4" style={{ backgroundColor: '#181922' }}>
        <div
          ref={container}
          className="justify-content-center vh-75 rounded-3 align-items-center"
          id="canvasContainer"
          style={{ width: '100%' }}
        >
          <canvas id="c" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </>
  );
};

export default Annotate;
