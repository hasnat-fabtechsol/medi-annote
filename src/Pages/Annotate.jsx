import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import Lung from '../assets/lung.png';
import { addRect, remove } from '../modules/canvasUtils';
import TopNav from '../AnnotateLayout/TopNav';
import SideNav from '../AnnotateLayout/SideNav';

const Annotate = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const canvasContainerRef = useRef(null);
  const [currentCanvasObject, setCurrentCanvasObject] = useState(null);
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  let pathPoints = [];

  const aspectRatio = 2;
  let mode;

  const initCanvas = () => (
    new fabric.Canvas('c', {
      height: 800,
      width: 800,
      backgroundColor: '#aaaaaa',
      selection: true, // Disable object selection
    })
  );

  useEffect(() => {
    const canvas = initCanvas();
    canvas.isDrawingMode = false;

    canvas.on('object:modified', () => {
      setCurrentCanvasObject(canvas.toObject().objects);
    });

    canvas.on('mouse:down', (options) => {
      if (isDrawingMode) {
        pathPoints.push({ x: options.e.clientX, y: options.e.clientY });
        console.log(pathPoints, "pathPoints");
      }
    });

    canvas.on('mouse:move', (options) => {
      if (isDrawingMode) {
        pathPoints.push({ x: options.e.clientX, y: options.e.clientY });
      }
    });

    canvas.on('mouse:up', () => {
      if (isDrawingMode) {
        createPathAndSelection(canvas, pathPoints);
        pathPoints = [];
        setIsDrawingMode(false);
      }
    });

    setCurrentCanvasObject(canvas.toObject().objects);
    addImageToCanvas(canvas);
    setCanvas(canvas);
  }, []);

  const addImageToCanvas = (canvas) => {
    fabric.Image.fromURL(Lung, (img) => {
      img.scaleToHeight(window.innerHeight / 1.5);
      img.scaleToWidth(window.innerWidth / 1.5);
      canvas.add(img);
      canvas.centerObject(img);
      canvas.setActiveObject(img);
    });
  };

  const createPathAndSelection = (canvas, pathPoints) => {
    const path = new fabric.Path(pathPoints, {
      // Set path properties (stroke, fill, etc.)
    });
    canvas.add(path);

    const selection = new fabric.Rect({
      left: path.getBoundingRect().left,
      top: path.getBoundingRect().top,
      width: path.getBoundingRect().width,
      height: path.getBoundingRect().height,
      fill: 'rgba(40,40,40,0.3)',
      selectable: false,
    });
    canvas.add(selection);
  };

  useEffect(() => {
    if (canvas) {
      // console.log(currentCanvasObject);
      // console.log(canvas.getActiveObject());
    }
  }, [currentCanvasObject]);

  const handlePenToolClick = () => {
    setIsDrawingMode(!isDrawingMode);
    canvas.isDrawingMode = !isDrawingMode;
    console.log(canvas.isDrawingMode);
  };


  function startDraw(canvas) {
    if (mode != "pencil") {
    mode = "pencil";
    document.getElementById("button-draw").style.backgroundColor = "#2C9BF6";
    
    canvas.isDrawingMode = true;
    // canvas.freeDrawingBrush.width = 3;
    console.log(canvas.freeDrawingBrush);
    fabric.PencilBrush.prototype.globalCompositeOperation = "source-over";
    // canvas.renderAll();
    }
    else {
        document.getElementById("button-draw").style.backgroundColor = "#333333";
        mode = "select";
        canvas.isDrawingMode = false;
    }
}


  const handleDeleteButtonClick = () => {
    remove(canvas);
  };

  useEffect(() => {
    if (canvas && canvasContainerRef.current) {
      const containerWidth = canvasContainerRef.current.offsetWidth;
      const containerHeight = containerWidth / aspectRatio;
      canvas.setWidth(containerWidth);
      canvas.setHeight(containerHeight);
      canvas.renderAll();
    }
  }, [canvas, aspectRatio]);

  return (
    <>
      <div>
        <TopNav canvas={canvas} />
        <SideNav canvas={canvas} />
        <button id='button-draw' onClick={startDraw}>Pen tool</button>
      </div>
      <div className="p-2 rounded-4" style={{ backgroundColor: '#181922' }}>
        <div
          ref={canvasContainerRef}
          className="justify-content-center vh-75 align-items-center"
          id="canvasContainer"
          style={{ width: '100%' }}
        >
          <canvas ref={canvasRef} id='c' style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </>
  );
};

export default Annotate;
