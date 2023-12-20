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

  // Loop through actions
  actions.forEach((action) => {
    // Check if action is available
    if (!action) {
      console.error('Action is not available');
      return;
    }

    // Check if action is a function
    if (typeof action !== 'function') {
      console.error('Action is not a function');
      return;
    }

    // Execute action
    action(canvas);
  });

  
};

// Delete function
const deleteSelectedObjects = (canvas) => {
   canvas.remove(...canvas.getActiveObjects());
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
