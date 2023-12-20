// canvasUtils.js

import { fabric } from 'fabric';

// Function to perform various actions
export const performCanvasAction = (canvas, action, ...args) => {
  switch (action) {
    case 'delete':
      deleteSelectedObjects(canvas);
      break;
    case 'rotate':
      rotateSelectedObject(canvas, ...args);
      break;
    // Add more cases for other actions as needed
    default:
      console.error(`Unsupported action: ${action}`);
  }
};

// Delete function
const deleteSelectedObjects = (canvas) => {
  const activeObject = canvas.getActiveObject();
  if (activeObject) {
    canvas.remove(activeObject);
    canvas.renderAll();
  }
};

// Rotate function
const rotateSelectedObject = (canvas, angle) => {
  const activeObject = canvas.getActiveObject();
  if (activeObject) {
    activeObject.set('angle', angle);
    canvas.renderAll();
  }
};

// Add more functions as needed
