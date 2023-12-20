// canvasUtils.js

import { fabric } from 'fabric';

// Function to encapsulate multiple canvas actions
export const performCanvasActions = (actions, canvas) => {
  // Check if canvas is available
  if (!canvas) {
    console.error('Canvas is not available');
    return;
  }
  console.log(actions , "actions");
  console.log(canvas , "canvas");

  // Iterate over the actions and execute them
  actions.forEach(({ action , canvas , args }) => {
    switch (action) {
      case 'delete':
        deleteSelectedObjects(canvas);
        break;
      case 'rotate':
        rotateSelectedObject(canvas, ...args);
        break;
      // Add more cases for other actions as needed
      default:
        console.warn(`Unknown canvas action: ${action}`);
    }
  });
};



// Delete function
const deleteSelectedObjects = (canvas) => {
    canvas.remove(canvas.getActiveObject());
   
};

// Rotate function
const rotateSelectedObject = (canvas, angle) => {
  const activeObject = canvas.getActiveObject();
  if (activeObject) {
    activeObject.set('angle', angle);
    canvas.renderAll();
  } else {
    console.warn('No active object to rotate');
  }
};

// Add more functions as needed
