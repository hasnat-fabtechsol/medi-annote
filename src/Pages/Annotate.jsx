import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import Lung from "../assets/lung.png";

const Annotate = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      height: 500,
      width: 700,
      backgroundColor: "#fff",
      selection: false,
      preserveObjectStacking: true,
    });

    newCanvas.on("mouse:down", function (options) {
      if (options.target) {
        options.target.opacity = 0.5;
        newCanvas.renderAll();
      }
    });

    newCanvas.on("mouse:up", function (options) {
      if (options.target) {
        options.target.opacity = 1;
        newCanvas.renderAll();
      }
    });

    fabric.Image.fromURL(Lung, function (img) {
      img.scaleToWidth(500);
      img.scaleToHeight(500);
      img.set({
        selectable: true,
        resizable: true, // Enable resizing
        originX: "left",
        originY: "top",
      });
      newCanvas.add(img);
    });

    // Load canvas data from local storage, if available
    const savedCanvasData = localStorage.getItem("canvasData");
    if (savedCanvasData) {
      newCanvas.loadFromJSON(savedCanvasData, () => {
        newCanvas.renderAll();
      });
    }

    // Set canvas to state
    setCanvas(newCanvas);

    // Cleanup event listeners on component unmount
    return () => {
      newCanvas.off("mouse:down");
      newCanvas.off("mouse:up");
    };
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    // Save canvas data to local storage whenever the canvas changes
    if (canvas) {
      const canvasData = JSON.stringify(canvas.toObject());
      localStorage.setItem("canvasData", canvasData);
    }
  }, [canvas]);

  return (
    <>
      <div className="p-2 rounded-4" style={{ backgroundColor: "#181922" }}>
        <div
          className="vh-75 d-flex justify-content-center align-items-center"
          id="canvasContainer"
          style={{ height: "70vh" }}
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
    </>
  );
};

export default Annotate;
