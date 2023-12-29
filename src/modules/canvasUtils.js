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
    canvas.freeDrawingBrush.color = '#67D2B6';
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

  function fillColor(value) {
    console.log(value);
  
    // Convert hex color to RGB
    const rgbColor = new fabric.Color(value).getSource();
  
    
  
    // Set opacity to 0.5
    const rgbaColor = `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.4)`;
  
   
  
    // Set the fill property of the active object
    canvas.getActiveObject()?.set("fill", rgbaColor);

    if (canvas.getActiveObject()?.type === "group") {
      canvas.getActiveObject()?.forEachObject(function (obj) {
        if(obj.type === "path") {
          obj.set("fill", rgbaColor);
        }
       
      });
    }
  
    // Request render to update the canvas
    canvas.requestRenderAll();
  }
  

  // destructor above functions
  const utils = {
    remove,
    rotate,
    isDrawingMode,
    moveTool,
    fillColor
  };

  return utils;

}




















