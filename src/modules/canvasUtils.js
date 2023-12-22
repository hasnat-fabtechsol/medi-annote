import { fabric } from 'fabric';
import React from 'react';



export const addRect = (canvas,  rect) => {
  if (rect) {
    const testRect = new fabric.Rect(rect);
    canvas.add(testRect);
    canvas.setActiveObject(testRect);
   
  } else {
    const testRect = new fabric.Rect({
      height: 200,
      width: 200,
      fill: '#555555',
      rx: 0,
      ry: 0,
    });
    canvas.add(testRect);
    canvas.setActiveObject(testRect);
    
   
  }
}





export const remove= (canvas) => {
  canvas.getObjects().forEach((obj) => {
    canvas.remove(obj);
  });
  // canvas.discardActiveObject().renderAll();
}

export const rotate = (canvas) => {
  const activeObject = canvas.getActiveObject();
  const angle = 45; // Set the rotation angle to 45 degrees

  if (activeObject) {
    // Check if the object has a stored rotation angle property
    if (!activeObject.hasOwnProperty('_totalRotation')) {
      // If not, initialize it with 0
      activeObject._totalRotation = 0;
    }

    // Set the origin to the center
    activeObject.originX = 'center';
    activeObject.originY = 'center';

    // Increment the total rotation angle
    activeObject._totalRotation += angle;

    // Apply the cumulative rotation
    activeObject.set({
      angle: activeObject._totalRotation
    });

    canvas.renderAll();
  }
};
















