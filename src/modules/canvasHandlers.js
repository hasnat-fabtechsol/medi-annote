import { type } from "@testing-library/user-event/dist/type";
import { fabric } from "fabric";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function CanvasHandlers() {
  
  (function (fabric) {
    fabric.TextCurved = fabric.util.createClass(fabric.Object, {
        type: 'text-curved',
        diameter: 250,
        kerning: 0,
        text: '',
        flipped: false,
        fill: '#000',
        fontFamily: 'Times New Roman',
        fontSize: 24, // in px
        fontWeight: 'normal',
        fontStyle: '', // "normal", "italic" or "oblique".
        cacheProperties: fabric.Object.prototype.cacheProperties.concat('diameter', 'kerning', 'flipped', 'fill', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'strokeStyle', 'strokeWidth'),
        strokeStyle: null,
        strokeWidth: 0,
        initialize: function (text, options) {
            options || (options = {});
            if (typeof text == "string") {
                this.text = text
            }
            else {
                this.text = text.text;
            }
            this.callSuper('initialize', options);
            this.set('lockUniScaling', true);
            // Draw curved text here initially too, while we need to know the width and height.
            var canvas = this.getCircularText();
            this._trimCanvas(canvas);
            this.set('width', canvas.width);
            this.set('height', canvas.height);
        },
        _getFontDeclaration: function () {
            return [
                // node-canvas needs "weight style", while browsers need "style weight"
                (fabric.isLikelyNode ? this.fontWeight : this.fontStyle),
                (fabric.isLikelyNode ? this.fontStyle : this.fontWeight),
                this.fontSize + 'px',
                (fabric.isLikelyNode ? ('"' + this.fontFamily + '"') : this.fontFamily)
            ].join(' ');
        },
        _trimCanvas: function (canvas) {
            var ctx = canvas.getContext('2d'),
                w = canvas.width,
                h = canvas.height,
                pix = { x: [], y: [] }, n,
                imageData = ctx.getImageData(0, 0, w, h),
                fn = function (a, b) { return a - b };
            for (var y = 0; y < h; y++) {
                for (var x = 0; x < w; x++) {
                    if (imageData.data[((y * w + x) * 4) + 3] > 0) {
                        pix.x.push(x);
                        pix.y.push(y);
                    }
                }
            }
            pix.x.sort(fn);
            pix.y.sort(fn);
            n = pix.x.length - 1;
            w = pix.x[n] - pix.x[0];
            h = pix.y[n] - pix.y[0];
            var cut = ctx.getImageData(pix.x[0], pix.y[0], w, h);
            canvas.width = w;
            canvas.height = h;
            ctx.putImageData(cut, 0, 0);
        },
        // Source: http://jsfiddle.net/rbdszxjv/
        getCircularText: function () {
            var text = this.text,
                diameter = this.diameter,
                flipped = this.flipped,
                kerning = this.kerning,
                fill = this.fill,
                inwardFacing = true,
                startAngle = 0,
                canvas = fabric.util.createCanvasElement(),
                ctx = canvas.getContext('2d'),
                cw, // character-width
                x, // iterator
                clockwise = -1; // draw clockwise for aligned right. Else Anticlockwise
            if (flipped) {
                startAngle = 180;
                inwardFacing = false;
            }
            startAngle *= Math.PI / 180; // convert to radians
            // Calc heigt of text in selected font:
            var d = document.createElement('div');
            d.style.fontFamily = this.fontFamily;
            d.style.whiteSpace = 'nowrap';
            d.style.fontSize = this.fontSize + 'px';
            d.style.fontWeight = this.fontWeight;
            d.style.fontStyle = this.fontStyle;
            d.textContent = text;
            document.body.appendChild(d);
            var textHeight = d.offsetHeight;
            document.body.removeChild(d);
            canvas.width = canvas.height = diameter;
            ctx.font = this._getFontDeclaration();
            // Reverse letters for center inward.
            if (inwardFacing) {
                text = text.split('').reverse().join('')
            };
            // Setup letters and positioning
            ctx.translate(diameter / 2, diameter / 2); // Move to center
            startAngle += (Math.PI * !inwardFacing); // Rotate 180 if outward
            ctx.textBaseline = 'middle'; // Ensure we draw in exact center
            ctx.textAlign = 'center'; // Ensure we draw in exact center
            // rotate 50% of total angle for center alignment
            for (x = 0; x < text.length; x++) {
                cw = ctx.measureText(text[x]).width;
                startAngle += ((cw + (x == text.length - 1 ? 0 : kerning)) / (diameter / 2 - textHeight)) / 2 * -clockwise;
            }
            // Phew... now rotate into final start position
            ctx.rotate(startAngle);
            // Now for the fun bit: draw, rotate, and repeat
            for (x = 0; x < text.length; x++) {
                cw = ctx.measureText(text[x]).width; // half letter
                // rotate half letter
                ctx.rotate((cw / 2) / (diameter / 2 - textHeight) * clockwise);
                // draw the character at "top" or "bottom"
                // depending on inward or outward facing
                // Stroke
                if (this.strokeStyle && this.strokeWidth) {
                    ctx.strokeStyle = this.strokeStyle;
                    ctx.lineWidth = this.strokeWidth;
                    ctx.miterLimit = 2;
                    ctx.strokeText(text[x], 0, (inwardFacing ? 1 : -1) * (0 - diameter / 2 + textHeight / 2));
                }
                // Actual text
                ctx.fillStyle = fill;
                ctx.fillText(text[x], 0, (inwardFacing ? 1 : -1) * (0 - diameter / 2 + textHeight / 2));
                ctx.rotate((cw / 2 + kerning) / (diameter / 2 - textHeight) * clockwise); // rotate half letter
            }
            return canvas;
        },
        _set: function (key, value) {
            switch (key) {
                case 'scaleX':
                    this.fontSize *= value;
                    this.diameter *= value;
                    this.width *= value;
                    this.scaleX = 1;
                    if (this.width < 1) { this.width = 1; }
                    break;
                case 'scaleY':
                    this.height *= value;
                    this.scaleY = 1;
                    if (this.height < 1) { this.height = 1; }
                    break;
                default:
                    this.callSuper('_set', key, value);
                    break;
            }
        },
        _render: function (ctx) {
            var canvas = this.getCircularText();
            this._trimCanvas(canvas);
            this.set('width', canvas.width);
            this.set('height', canvas.height);
            ctx.drawImage(canvas, -this.width / 2, -this.height / 2, this.width, this.height);
            this.setCoords();
        },
        toObject: function (propertiesToInclude) {
            return this.callSuper('toObject', ['text', 'diameter', 'kerning', 'flipped', 'fill', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'strokeStyle', 'strokeWidth', 'styles'].concat(propertiesToInclude));
        }
    });
    fabric.TextCurved.fromObject = function (object, callback, forceAsync) {
        var instance = new fabric.TextCurved(object.text, object);
        callback && callback(instance);
        // return fabric.Object._fromObject();
    };
})(typeof fabric !== 'undefined' ? fabric : require('fabric').fabric);



  const { canvas } = useSelector(state=>state.auth);


  function initAligningGuidelines(canvas) {
    var ctx = canvas.getSelectionContext(),
      aligningLineOffset = 5,
      aligningLineMargin = 4,
      aligningLineWidth = 1,
      aligningLineColor = "rgb(0,255,0)",
      viewportTransform,
      zoom = 1;

    function drawVerticalLine(coords) {
      drawLine(
        coords.x + 0.5,
        coords.y1 > coords.y2 ? coords.y2 : coords.y1,
        coords.x + 0.5,
        coords.y2 > coords.y1 ? coords.y2 : coords.y1
      );
    }

    function drawHorizontalLine(coords) {
      drawLine(
        coords.x1 > coords.x2 ? coords.x2 : coords.x1,
        coords.y + 0.5,
        coords.x2 > coords.x1 ? coords.x2 : coords.x1,
        coords.y + 0.5
      );
    }

    function drawLine(x1, y1, x2, y2) {
      ctx.save();
      ctx.lineWidth = aligningLineWidth;
      ctx.strokeStyle = aligningLineColor;
      ctx.beginPath();
      ctx.moveTo(
        (x1 + viewportTransform[4]) * zoom,
        (y1 + viewportTransform[5]) * zoom
      );
      ctx.lineTo(
        (x2 + viewportTransform[4]) * zoom,
        (y2 + viewportTransform[5]) * zoom
      );
      ctx.stroke();
      ctx.restore();
    }

    function isInRange(value1, value2) {
      value1 = Math.round(value1);
      value2 = Math.round(value2);
      for (
        var i = value1 - aligningLineMargin, len = value1 + aligningLineMargin;
        i <= len;
        i++
      ) {
        if (i === value2) {
          return true;
        }
      }
      return false;
    }

    var verticalLines = [],
      horizontalLines = [];

    canvas.on("mouse:down", function () {
      viewportTransform = canvas.viewportTransform;
      zoom = canvas.getZoom();
    });

    canvas.on("object:moving", function (e) {
      var activeObject = e.target,
        canvasObjects = canvas.getObjects(),
        activeObjectCenter = activeObject.getCenterPoint(),
        activeObjectLeft = activeObjectCenter.x,
        activeObjectTop = activeObjectCenter.y,
        activeObjectBoundingRect = activeObject.getBoundingRect(),
        activeObjectHeight =
          activeObjectBoundingRect.height / viewportTransform[3],
        activeObjectWidth =
          activeObjectBoundingRect.width / viewportTransform[0],
        horizontalInTheRange = false,
        verticalInTheRange = false,
        transform = canvas._currentTransform;

      if (!transform) return;

      // It should be trivial to DRY this up by encapsulating (repeating) creation of x1, x2, y1, and y2 into functions,
      // but we're not doing it here for perf. reasons -- as this a function that's invoked on every mouse move

      for (var i = canvasObjects.length; i--; ) {
        if (canvasObjects[i] === activeObject) continue;

        var objectCenter = canvasObjects[i].getCenterPoint(),
          objectLeft = objectCenter.x,
          objectTop = objectCenter.y,
          objectBoundingRect = canvasObjects[i].getBoundingRect(),
          objectHeight = objectBoundingRect.height / viewportTransform[3],
          objectWidth = objectBoundingRect.width / viewportTransform[0];

        // snap by the horizontal center line
        if (isInRange(objectLeft, activeObjectLeft)) {
          verticalInTheRange = true;
          verticalLines.push({
            x: objectLeft,
            y1:
              objectTop < activeObjectTop
                ? objectTop - objectHeight / 2 - aligningLineOffset
                : objectTop + objectHeight / 2 + aligningLineOffset,
            y2:
              activeObjectTop > objectTop
                ? activeObjectTop + activeObjectHeight / 2 + aligningLineOffset
                : activeObjectTop - activeObjectHeight / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(objectLeft, activeObjectTop),
            "center",
            "center"
          );
        }

        // snap by the left edge
        if (
          isInRange(
            objectLeft - objectWidth / 2,
            activeObjectLeft - activeObjectWidth / 2
          )
        ) {
          verticalInTheRange = true;
          verticalLines.push({
            x: objectLeft - objectWidth / 2,
            y1:
              objectTop < activeObjectTop
                ? objectTop - objectHeight / 2 - aligningLineOffset
                : objectTop + objectHeight / 2 + aligningLineOffset,
            y2:
              activeObjectTop > objectTop
                ? activeObjectTop + activeObjectHeight / 2 + aligningLineOffset
                : activeObjectTop - activeObjectHeight / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(
              objectLeft - objectWidth / 2 + activeObjectWidth / 2,
              activeObjectTop
            ),
            "center",
            "center"
          );
        }

        // snap by the right edge
        if (
          isInRange(
            objectLeft + objectWidth / 2,
            activeObjectLeft + activeObjectWidth / 2
          )
        ) {
          verticalInTheRange = true;
          verticalLines.push({
            x: objectLeft + objectWidth / 2,
            y1:
              objectTop < activeObjectTop
                ? objectTop - objectHeight / 2 - aligningLineOffset
                : objectTop + objectHeight / 2 + aligningLineOffset,
            y2:
              activeObjectTop > objectTop
                ? activeObjectTop + activeObjectHeight / 2 + aligningLineOffset
                : activeObjectTop - activeObjectHeight / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(
              objectLeft + objectWidth / 2 - activeObjectWidth / 2,
              activeObjectTop
            ),
            "center",
            "center"
          );
        }

        // snap by the vertical center line
        if (isInRange(objectTop, activeObjectTop)) {
          horizontalInTheRange = true;
          horizontalLines.push({
            y: objectTop,
            x1:
              objectLeft < activeObjectLeft
                ? objectLeft - objectWidth / 2 - aligningLineOffset
                : objectLeft + objectWidth / 2 + aligningLineOffset,
            x2:
              activeObjectLeft > objectLeft
                ? activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset
                : activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(activeObjectLeft, objectTop),
            "center",
            "center"
          );
        }

        // snap by the top edge
        if (
          isInRange(
            objectTop - objectHeight / 2,
            activeObjectTop - activeObjectHeight / 2
          )
        ) {
          horizontalInTheRange = true;
          horizontalLines.push({
            y: objectTop - objectHeight / 2,
            x1:
              objectLeft < activeObjectLeft
                ? objectLeft - objectWidth / 2 - aligningLineOffset
                : objectLeft + objectWidth / 2 + aligningLineOffset,
            x2:
              activeObjectLeft > objectLeft
                ? activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset
                : activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(
              activeObjectLeft,
              objectTop - objectHeight / 2 + activeObjectHeight / 2
            ),
            "center",
            "center"
          );
        }

        // snap by the bottom edge
        if (
          isInRange(
            objectTop + objectHeight / 2,
            activeObjectTop + activeObjectHeight / 2
          )
        ) {
          horizontalInTheRange = true;
          horizontalLines.push({
            y: objectTop + objectHeight / 2,
            x1:
              objectLeft < activeObjectLeft
                ? objectLeft - objectWidth / 2 - aligningLineOffset
                : objectLeft + objectWidth / 2 + aligningLineOffset,
            x2:
              activeObjectLeft > objectLeft
                ? activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset
                : activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(
              activeObjectLeft,
              objectTop + objectHeight / 2 - activeObjectHeight / 2
            ),
            "center",
            "center"
          );
        }
      }

      if (!horizontalInTheRange) {
        horizontalLines.length = 0;
      }

      if (!verticalInTheRange) {
        verticalLines.length = 0;
      }
    });

    canvas.on("before:render", function () {
     canvas.clearContext(ctx); 
    });

    canvas.on("after:render", function () {
      for (var i = verticalLines.length; i--; ) {
        drawVerticalLine(verticalLines[i]);
      }
      for (var i = horizontalLines.length; i--; ) {
        drawHorizontalLine(horizontalLines[i]);
      }

      verticalLines.length = horizontalLines.length = 0;
    });

    canvas.on("mouse:up", function () {
      verticalLines.length = horizontalLines.length = 0;
      canvas.renderAll();
    });
  }
  function initCenteringGuidelines(canvas) {
    var canvasWidth = canvas.getWidth(),
      canvasHeight = canvas.getHeight(),
      canvasWidthCenter = canvasWidth / 2,
      canvasHeightCenter = canvasHeight / 2,
      canvasWidthCenterMap = {},
      canvasHeightCenterMap = {},
      centerLineMargin = 4,
      centerLineColor = "rgba(255,0,241,0.5)",
      centerLineWidth = 1,
      ctx = canvas.getSelectionContext(),
      viewportTransform;

    for (
      var i = canvasWidthCenter - centerLineMargin,
        len = canvasWidthCenter + centerLineMargin;
      i <= len;
      i++
    ) {
      canvasWidthCenterMap[Math.round(i)] = true;
    }
    for (
      var i = canvasHeightCenter - centerLineMargin,
        len = canvasHeightCenter + centerLineMargin;
      i <= len;
      i++
    ) {
      canvasHeightCenterMap[Math.round(i)] = true;
    }

    function showVerticalCenterLine() {
      showCenterLine(
        canvasWidthCenter + 0.5,
        0,
        canvasWidthCenter + 0.5,
        canvasHeight
      );
    }

    function showHorizontalCenterLine() {
      showCenterLine(
        0,
        canvasHeightCenter + 0.5,
        canvasWidth,
        canvasHeightCenter + 0.5
      );
    }

    function showCenterLine(x1, y1, x2, y2) {
      ctx.save();
      ctx.strokeStyle = centerLineColor;
      ctx.lineWidth = centerLineWidth;
      ctx.beginPath();
      ctx.moveTo(x1 * viewportTransform[0], y1 * viewportTransform[3]);
      ctx.lineTo(x2 * viewportTransform[0], y2 * viewportTransform[3]);
      ctx.stroke();
      ctx.restore();
    }

    var afterRenderActions = [],
      isInVerticalCenter,
      isInHorizontalCenter;

    canvas.on("mouse:down", function () {
      viewportTransform = canvas.viewportTransform;
    });

    canvas.on("object:moving", function (e) {
      var object = e.target,
        objectCenter = object.getCenterPoint(),
        transform = canvas._currentTransform;

      if (!transform) return;

      isInVerticalCenter = Math.round(objectCenter.x) in canvasWidthCenterMap;
      isInHorizontalCenter =
        Math.round(objectCenter.y) in canvasHeightCenterMap;

      if (isInHorizontalCenter || isInVerticalCenter) {
        object.setPositionByOrigin(
          new fabric.Point(
            isInVerticalCenter ? canvasWidthCenter : objectCenter.x,
            isInHorizontalCenter ? canvasHeightCenter : objectCenter.y
          ),
          "center",
          "center"
        );
      }
    });

    canvas.on("before:render", function () {
     canvas.clearContext(ctx); 
    });

    canvas.on("after:render", function () {
      if (isInVerticalCenter) {
        showVerticalCenterLine();
      }
      if (isInHorizontalCenter) {
        showHorizontalCenterLine();
      }
    });

    canvas.on("mouse:up", function () {
      // clear these values, to stop drawing guidelines once mouse is up
      isInVerticalCenter = isInHorizontalCenter = null;
      canvas.renderAll();
    });
  }

  function initCanvasHandlers(canvas,normal,update){

    // canvas.on({'mouse:wheel': function (opt) {
    //             var delta = opt.e.deltaY;
    //             var zoom = canvas.getZoom();
    //             zoom *= 0.999 ** delta;
    //             if (zoom > 20) zoom = 20;
    //             if (zoom < 0.01) zoom = 0.01;
    //             canvas.setZoom(zoom);
    //             opt.e.preventDefault();
    //             opt.e.stopPropagation();
    //         }
    //       })
          canvas.on({
            'object:selected': function (e) {
              update(e);
            },
            'selection:created': function (e) {
              update(e);
            },
            'selection:updated': function (e) {
              update(e);
            },
            'before:selection:cleared': function (e) {
              console.log("cleared");
              normal(e);
            },
          })
       
  }

  function addSticker(e) {
    // fabric.loadSVGFromURL(e.target.src, function(objects) {
    //   var group = new fabric.PathGroup(objects, {
    //     left: 165,
    //     top: 100,
    //     width: 295,
    //     height: 211
    //   });
    //   canvas.add(group);
    //   canvas.renderAll();
    // });

    fabric.loadSVGFromURL(e.target.src, function (objects, options) {
      console.log(objects);
      var obj = fabric.util.groupSVGElements(objects, options);
      obj.scaleX = 10; // increase X scale by 2
      obj.scaleY = 10; // increase Y scale by 2
      obj.set({id:"sticker"})
      canvas.add(obj).renderAll();
    });

    // console.log('hello')
    // var img = e.target;
    // var newImage = new fabric.Image(img,{
    //   width:150,
    //   top:10,
    //   left:10
    // })

    // canvas.add(newImage);
  }
function addArrow(e){
  fabric.loadSVGFromURL(e.target.src, function (objects, options) {
    console.log(objects);
    var obj = fabric.util.groupSVGElements(objects, options);
    obj.scaleX = 1; // increase X scale by 2
    obj.scaleY =1; // increase Y scale by 2
    obj.set({id:"sticker"})
    canvas.add(obj).renderAll();
  });
}
  function addLine(e) {
    // fabric.loadSVGFromURL(e.target.src, function(objects) {
    //   var group = new fabric.PathGroup(objects, {
    //     left: 165,
    //     top: 100,
    //     width: 295,
    //     height: 211
    //   });
    //   canvas.add(group);
    //   canvas.renderAll();
    // });

    fabric.loadSVGFromURL(e.target.src, function (objects, options) {
      console.log(objects);
      var obj = fabric.util.groupSVGElements(objects, options);
      obj.scaleX = 1; // increase X scale by 2
      obj.scaleY =0.2; // increase Y scale by 2
      obj.set({id:"sticker"})
      canvas.add(obj).renderAll();
    });

    // console.log('hello')
    // var img = e.target;
    // var newImage = new fabric.Image(img,{
    //   width:150,
    //   top:10,
    //   left:10
    // })

    // canvas.add(newImage);
  }
  function setBackgroundImage(e) {
    
  let obj =canvas.getActiveObject()
  if(!obj||!obj.type=="image")
  return toast.warning("Please Select a Image for Background")
if(obj.type=="image"){ 
  var dataUrl = obj.toDataURL();

  // use the image data to set the background image
  fabric.Image.fromURL(dataUrl, function(img) {
    let scaleX = canvas.width / img.width;
    let scaleY = canvas.width / img.width;
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
      scaleX,
      scaleY
    });
  });
  canvas.remove(obj)
  canvas.renderAll()
toast.info("Background Image Set")
  
}
    // canvas.setBackgroundImage(obj)
    // canvas.remove(obj)
    // canvas.discardActiveObject()

    
  }

  
  function imageUpload(e) {
    // Gives us Complete info about file
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f) {
      var data = f.target.result;
      fabric.Image.fromURL(data, function (img) {
        let scaleX = canvas.width / img.width;
        let scaleY = canvas.width / img.width;
        var uploadImg = img.set({
          left: 0,
          top: 0,
          angle: 0,
          scaleX: scaleX,
          scaleY: scaleY,
        });
        canvas.add(uploadImg).setActiveObject(uploadImg);
        canvas.requestRenderAll();
      });
    };
    reader.readAsDataURL(file);
  }

  function remove() {
    canvas.getActiveObjects().forEach((obj) => {
      canvas.remove(obj);
    });
    canvas.discardActiveObject().renderAll();
  }

  function addNewText() {
    let text = new fabric.Textbox("Blank", {
      left: Math.floor(Math.random() * (250 - 100 + 1) + 100),
      top: Math.floor(Math.random() * (150 - 70 + 1) + 70),
      fontSize: 15,
      width: 110,
      padding: "10",
      fontFamily: "Arial,Helvetica,sans-serif",
      lineHeight: 1,
      // charSpacing: 1,
      // textAlign: 'right',
      // direction: 'rtl'
    });
    canvas.add(text).setActiveObject(text);
    
  }
  
  function addCurvedText(data,flag,curvedFlag) {
    const {text,diameter,kerning,flip}=data

    if(flag){
console.log("newText");

      let textObj = new fabric.Text(text, {
        left: Math.floor(Math.random() * (250 - 100 + 1) + 100),
        top: Math.floor(Math.random() * (150 - 70 + 1) + 70),
        fontSize: 15,
        width: 110,
        padding: "10",
        fontFamily: "Arial",
        lineHeight: 1,
      });
      canvas.add(textObj).setActiveObject(textObj);
    return
  }
  else{
    obj = canvas.getActiveObject();
        if(!(obj?.text||obj?.diameter))
        return

    var obj

     if(curvedFlag)
  {
 
    if (obj?.diameter) {
      console.log("editC");
        obj.set({
          top:obj.top,
          left:obj.left,
          fontSize:obj.fontSize,
        fontFamily:obj.fontFamily,
        fontSize:obj.fontSize,
        fontStyle:obj.fontStyle,
        fontWeight:obj.fontWeight,
        fill:obj.fill,
        stroke:obj.stroke,
            text: text,
            diameter: diameter,
            kerning: Number(kerning),
        });
        obj.dirty = true;
        canvas.renderAll();

    }else{
      console.log("newTextC");
     let curvedObj = new fabric.TextCurved(text, {
        diameter: diameter,
        kerning: Number(kerning),
        fontSize:20,
        flipped:flip,
        top:obj.top,
        left:obj.left,
        fontSize:obj.fontSize,
        fontFamily:obj.fontFamily,
        fontSize:obj.fontSize,
        fontStyle:obj.fontStyle,
        fontWeight:obj.fontWeight,
        fill:obj.fill,
        stroke:obj.stroke,
    });
    canvas.add(curvedObj).setActiveObject(curvedObj);

    canvas.remove(obj)
    canvas.renderAll();
   
    }
  } if (obj?.diameter&&!curvedFlag) {
    let textObj = new fabric.Text(text, {
      top:obj.top,
      left:obj.left,
      fontSize:obj.fontSize,
      fontFamily:obj.fontFamily,
      fontSize:obj.fontSize,
      fontStyle:obj.fontStyle,
      fontWeight:obj.fontWeight,
      fill:obj.fill,
      stroke:obj.stroke,
      width: 110,
      padding: "10",
      lineHeight: 1,
    });
    canvas.remove(obj)
    canvas.add(textObj).setActiveObject(textObj);
  

  }
  else{

if(obj.text&&!obj.diameter){
  console.log("editTEXT");
  obj.set({
    text
  })
  canvas.renderAll();
}
  }
}
    }





     
  function fontFamily(e) {
    if (e.target.value !== "Times New Roman") {
      canvas.getActiveObject()?.set("fontFamily", e.target.value);
      canvas.requestRenderAll();
    }
  }

  function fontItalic() {
    const getFontItalic = canvas.getActiveObject().get("fontStyle");
    const setFontItalic = () =>
      canvas.getActiveObject()?.set("fontStyle", "italic");
    const setFontNormal = () =>
      canvas.getActiveObject()?.set("fontStyle", "normal");
    getFontItalic === "normal" ? setFontItalic() : setFontNormal();
    canvas.requestRenderAll();
  }
  function fontSize(value) {
    canvas.getActiveObjects().forEach((obj) => {
      console.log(value)
      obj.set({fontSize: value});
    });
    canvas.requestRenderAll();
   
  }
  function LineSpace(value) {
    canvas.getActiveObjects().forEach((obj) => {
      obj.set({ charSpacing:value*10 });
    });
    canvas.requestRenderAll();
  }
 
  function fontBold() {
    const getFontWeight = canvas.getActiveObject().get("fontWeight");
    const setFontBold = () =>
      canvas.getActiveObject()?.set("fontWeight", "bold");
    const setFontNormal = () =>
      canvas.getActiveObject()?.set("fontWeight", "normal");
    getFontWeight === "normal" ? setFontBold() : setFontNormal();
    canvas.requestRenderAll();
  }

  function addRectangle() {
    var rect = new fabric.Rect({
      left: 40,
      top: 40,
      width: 50,
      height: 50,
      fill: "",
      stroke: "#000000",
      strokeWidth: 2,
      padding: 0,
    });
    canvas.add(rect).setActiveObject(rect);
  }

  function addCircle() {
    var rect = new fabric.Circle({
      left: 40,
      top: 40,
      radius: 50,
      fill: "#FFFFFF",
      stroke: "#0000",
      strokeWidth: 2,
      padding: 0,
    });
    canvas.add(rect).setActiveObject(rect);
  }

    function addTriangle() {
      var rect = new fabric.Triangle({
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fill: "#FFFFFF",
        stroke: "#0000",
        strokeWidth: 2,
        padding: 0,
      });
      canvas.add(rect).setActiveObject(rect);
    }

  function fillColor(value) {
    canvas.getActiveObject()?.set("fill", value);
    canvas.requestRenderAll();
  }

  function setStroke(value) {
    canvas.getActiveObject()?.set("stroke", value);
    canvas.requestRenderAll();
  }

  function setStrokeWidth(e) {
    canvas.getActiveObject()?.set("strokeWidth", parseInt(e.target.value));
    canvas.requestRenderAll();
  }

  function fontUnderline(e) {
    const getFontUnderline = canvas.getActiveObject().get("underline");
    const setUnderlineTrue = () =>
      canvas.getActiveObject()?.set("underline", true);
    const setUnderlineFalse = () =>
      canvas.getActiveObject()?.set("underline", false);
    getFontUnderline ? setUnderlineFalse() : setUnderlineTrue();
    canvas.requestRenderAll();
  }

  function TextCenter() {
    canvas.getActiveObjects().forEach((obj) => {
      obj.set({ textAlign: "center" });
    });
    canvas.requestRenderAll();
  }

  function TextLeft() {
    canvas.getActiveObjects().forEach((obj) => {
      obj.set({ textAlign: "left" });
    });
    canvas.requestRenderAll();
  }

  function TextRight() {
    canvas.getActiveObjects().forEach((obj) => {
      obj.set({ textAlign: "right" });
    });
    canvas.requestRenderAll();
  }

  function LineHeight(value) {
    canvas.getActiveObjects().forEach((obj) => {
      obj.set({ lineHeight: value });
    });
    canvas.requestRenderAll();
  }
  function LineSpace(value) {
    canvas.getActiveObjects().forEach((obj) => {
      obj.set({ charSpacing:value*10 });
    });
    canvas.requestRenderAll();
  }

  function ObjCenter() {
    canvas.getActiveObjects().forEach((obj) => {
      obj.center();
    });
    canvas.requestRenderAll();
  }

  function ObjRotate() {
    let activeObj = canvas.getActiveObject();
    let angle = activeObj.angle;
    let newAngel = angle == 355 ? 0 : angle + 45;
    activeObj.rotate(newAngel);
    canvas.requestRenderAll();
  }

  function CopyObj() {
    canvas.getActiveObjects().forEach((obj) => {
  
     obj.clone(function(cloned) {
      if(obj.id)
cloned.set({id:obj.id})
        cloned.set("top", cloned.top + 5);
        cloned.set("left", cloned.left + 5);
        canvas.add(cloned);
        canvas.requestRenderAll();
      });
 
    });
  }

  function bringFront(e){
    canvas.getActiveObjects().forEach((obj) => {
      canvas.bringForward(obj);
  });
  canvas.renderAll();
      }

 



function sendBack(){
   
        canvas.getActiveObjects().forEach((obj) => {
            canvas.sendBackwards(obj);
        });
        canvas.renderAll();
  
  }
   
    // $("#forward").on('click', function (e) {
    //     canvas.getActiveObjects().forEach((obj) => {
    //         canvas.bringForward(obj);
    //     });
    //     canvas.discardActiveObject().renderAll();
    // });
    // $("#front").on('click', function (e) {
    //     canvas.getActiveObjects().forEach((obj) => {
    //         canvas.bringToFront(obj);
    //     });
    //     canvas.discardActiveObject().renderAll();
    // });

  

  // function ZoomOut() {
  //   // ZoomOut()
  //   canvas.setZoom(canvas.getZoom() / 1.1);
  // }

    function ZoomOut(value) {
      console.log(value,"llllllllllllllllllllllllllllllllllllllllllll")
      var obj = canvas.getActiveObject() || canvas.getActiveGroup();
      var zoom = canvas.getZoom() - value;
    
      if (obj) {
        // If there's an active object or group, zoom out from its center point
        var center = obj.getCenterPoint();
        canvas.zoomToPoint(center, zoom);
      } else {
        // Otherwise, zoom out from the center of the canvas
        var canvasWidth = canvas.getWidth();
        var canvasHeight = canvas.getHeight();
        var center = new fabric.Point(canvasWidth/2, canvasHeight/2);
        canvas.zoomToPoint(center, zoom);
      }
    }

  function ZoomIn(value) {
    console.log(value,"llllllllllllllllllllllllllllllllllllllllllll")
    // var obj = canvas.getActiveObject() || canvas.getActiveGroup();
    var obj = canvas;
    // var zoom = canvas.getZoom() * value;
  
    if (obj) {
      // If there's an active object or group, zoom in on its center point
      var center = obj.getCenterPoint();
      canvas.zoomToPoint(center, value);
    } else {
      // Otherwise, zoom in on the center of the canvas
      var canvasWidth = canvas.getWidth();
      var canvasHeight = canvas.getHeight();
      var center = new fabric.Point(canvasWidth/2, canvasHeight/2);
      canvas.zoomToPoint(center, value);
    }
  }

  
//  function addStar() {
//   var points = [
//     { x: 349.9, y: 75 },
//     { x: 379, y: 160.9 },
//     { x: 469, y: 160.9 },
//     { x: 397, y: 214.9 },
//     { x: 423, y: 300.9 },
//     { x: 350, y: 249.9 },
//     { x: 276.9, y: 301 },
//     { x: 303, y: 215 },
//     { x: 231, y: 161 },
//     { x: 321, y: 161 },
//   ];

//   var polly = new fabric.Polygon(points, {
//     left: 0,
//     top: 0,
//     fill: "#ffffff",
//     strokeWidth: 4,
//     stroke: "blck",
//     cornerColor: "blue",
//     padding: 0,
//   });

//   canvas.add(polly).setActiveObject(polly);
// }


function addStar() {
  const centerX = 350;
  const centerY = 250;
  const radius1 = 100;
  const radius2 = radius1 / 2;
  const sides = 6;
  const points = [];
  for (let i = 0; i < sides; i++) {
    const angle1 = Math.PI * 2 / sides * i;
    const angle2 = angle1 + Math.PI / sides;
    const x1 = centerX + radius1 * Math.cos(angle1);
    const y1 = centerY + radius1 * Math.sin(angle1);
    const x2 = centerX + radius2 * Math.cos(angle2);
    const y2 = centerY + radius2 * Math.sin(angle2);
    points.push({ x: x1, y: y1 });
    points.push({ x: x2, y: y2 });
  }
  const sixPointedStar = new fabric.Polygon(points, {
    left: 0,
    top: 0,
    fill: "#ffffff",
    strokeWidth: 4,
    stroke: "black",
    cornerColor: "blue",
    padding: 0,
  });
  sixPointedStar.set({id:"sticker"})
  canvas.add(sixPointedStar).setActiveObject(sixPointedStar);
}

function addFourPointedStar() {
  const centerX = 350;
  const centerY = 250;
  const radius1 = 100;
  const radius2 = radius1 / 2;
  const points = [];
  for (let i = 0; i < 4; i++) {
    const angle1 = Math.PI * 2 / 4 * i;
    const angle2 = angle1 + Math.PI / 4;
    const x1 = centerX + radius1 * Math.cos(angle1);
    const y1 = centerY + radius1 * Math.sin(angle1);
    const x2 = centerX + radius2 * Math.cos(angle2);
    const y2 = centerY + radius2 * Math.sin(angle2);
    points.push({ x: x1, y: y1 });
    points.push({ x: x2, y: y2 });
  }
  const fourPointedStar = new fabric.Polygon(points, {
    left: 0,
    top: 0,
    fill: "#ffffff",
    strokeWidth: 4,
    stroke: "black",
    cornerColor: "blue",
    padding: 0,
  });
  fourPointedStar.set({id:"sticker"})
  canvas.add(fourPointedStar).setActiveObject(fourPointedStar);
}

  
  return {
    addFourPointedStar,
    addStar,
    addLine,
    addSticker,
    imageUpload,
    remove,
    fontItalic,
    fontBold,
    addRectangle,
    addCircle,
    addTriangle,
    addNewText,
    addCurvedText,
    fontFamily,
    fontSize,
    fillColor,
    TextCenter,
    LineHeight,
    ObjCenter,
    ObjRotate,
    ZoomOut,
    ZoomIn,
    CopyObj,
    setStroke,
    setBackgroundImage,
    initAligningGuidelines,
    initCenteringGuidelines,
    initCanvasHandlers,
    sendBack,
    bringFront,
    fontUnderline,
    TextLeft,
    TextRight,
    LineSpace,
    addArrow,
    addStar
  };
}
