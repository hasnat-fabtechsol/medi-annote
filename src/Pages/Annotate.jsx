import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import Lung from '../assets/lung.png';
import * as canvasUtils from '../modules/canvasUtils';

const Annotate = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const canvasContainerRef = useRef(null);

  const aspectRatio = 2;

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: canvasContainerRef.current.offsetWidth,
      height: canvasContainerRef.current.offsetWidth / aspectRatio,
      backgroundColor: '#fff',
      selection: false,
      preserveObjectStacking: true,
    });

    newCanvas.on('mouse:down', function (options) {
      if (options.target) {
        options.target.opacity = 0.5;
        newCanvas.renderAll();
      }
    });

    newCanvas.on('mouse:up', function (options) {
      if (options.target) {
        options.target.opacity = 1;
        newCanvas.renderAll();
      }
    });

    fabric.Image.fromURL(Lung, function (img) {
      // Fit image to canvas size
      img.scaleToWidth(newCanvas.width);
      img.scaleToHeight(newCanvas.height);
      img.set({
        selectable: true,
        resizable: true,
        originX: 'left',
        originY: 'top',
      });
      newCanvas.add(img);
    });

    setCanvas(newCanvas);

    return () => {
      newCanvas.off('mouse:down');
      newCanvas.off('mouse:up');
    };
  }, []);

  useEffect(() => {
    if (canvas) {
      const canvasData = JSON.stringify(canvas.toObject());
      localStorage.setItem('canvasData', canvasData);
    }
  }, [canvas]);

  useEffect(() => {
    // Ensure canvasContainerRef.current is set before accessing properties
    if (canvas && canvasContainerRef.current) {
      const containerWidth = canvasContainerRef.current.offsetWidth;
      const containerHeight = containerWidth / aspectRatio;
      canvas.setWidth(containerWidth);
      canvas.setHeight(containerHeight);
      canvas.renderAll();
    }
  }, [canvas, aspectRatio]);

  const handleCanvasAction = (action, ...args) => {
    canvasUtils.performCanvasAction(canvas, action, ...args);
  };

  return (
    <div className="p-2 rounded-4" style={{ backgroundColor: '#181922' }}>
      <div
        ref={canvasContainerRef}
        className="justify-content-center vh-75 align-items-center"
        id="canvasContainer"
        style={{ width: '100%' }}
      >
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default Annotate;
