import { fabric } from 'fabric';
import React from 'react';
import { useSelector } from "react-redux";


export default function CanvasUtils() {

  const canvas = useSelector((state) => state.canvasState);

  // remove function for canvas
  const remove = (canvas) => {
    const objectsactive=canvas.getActiveObject();
    canvas.remove(objectsactive);
    canvas.renderAll();
  };

  // rotate function for canvas
  const rotate = (canvas) => {
    canvas.getActiveObjects().forEach((obj) => {
      obj.rotate(45);
    });
  };

  // free Drawing mode function for canvas
  function isDrawingMode(canvas) {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 5;
    canvas.freeDrawingBrush.color = 'red';
  }

  function moveTool(canvas){
 
    canvas.isDrawingMode = false;
    canvas.selection=true;
     // Get the selected object
  const activeObject = canvas.getActiveObject();

  if (activeObject) {
    // If an object is selected, set it as the active object
    canvas.setActiveObject(activeObject);
  }

  }

  // destructor above functions
  const utils = {
    remove,
    rotate,
    isDrawingMode,
    moveTool
  };

  return utils;

}




















