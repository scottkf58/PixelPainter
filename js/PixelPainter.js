function pixelPainter(){
  var preColor;
  var currColor;
  var coloredPix = [];
  var ppcolors = document.querySelector("#ppcolors");
  var ppcanvas = document.querySelector("#ppcanvas");
  var colorArr = ["red", "blue", "yellow", "green", "black", "orange", "purple", "brown", "gray", "salmon"];

  // Generates each pixel
  function makePixel(elClassName, target){
    var pixel = document.createElement("div");
    pixel.className = elClassName;
    target.appendChild(pixel);
    coloredPix.push();
    return pixel;
  }

// Creates a canvas w/ w * h pixels
  function makeCanvas(w, h){
    var num = w * h;
    for (var i = 0; i < num; i++){
      var pixel = makePixel("pixel", ppcanvas);
      if (i % w === w-1){
        ppcanvas.appendChild(document.createElement("br"));
      }
      pixel.addEventListener("click", paintColor);
    }
  }

// Creates a color palette of colors to choose from
  function makeColorSwatch(w, h){
    var num = w * h;
    for (var i = 0; i < num; i++){
      var pixel = makePixel("colors", ppcolors);
      if (i % w === w-1){
        ppcolors.appendChild(document.createElement("br"));
      }
      pixel.addEventListener("click", setColor);
      pixel.style.backgroundColor = colorArr[i];
    }
  }

// Saves the selected color from color palette
  function setColor(){
    preColor = this.style.backgroundColor;
    currColor = preColor;
    console.log(currColor);
  }

// Paints pixel
 function paintColor(){
    this.style.backgroundColor = currColor;
    console.log(currColor);
  }

  makeColorSwatch(5, 2);
  makeCanvas(30, 30);

// Creates button to clear the entire canvas
var clear = document.createElement("button");
  clear.id = "clear";
  clear.innerHTML = "clear";
  clear.addEventListener("click", clearCanvas);
  ppcolors.appendChild(clear);

// Clears the entire canvas
  function clearCanvas() {
    var pixels = document.querySelectorAll(".pixel");
    for (var i = 0; i < pixels.length; i++){
      var pixel = pixels[i];
      if (pixel.style.backgroundColor !== ""){
       pixel.style.backgroundColor = "";
      }
    }
  }

// Creates button to erase selected pixel
  var erase = document.createElement("button");
  erase.id = "erase";
  erase.innerHTML = "erase";
  erase.addEventListener("click", function(){
      currColor = "";
      this.style.backgroundColor = "";
      console.log("erase");
    });
  ppcolors.appendChild(erase);

  return {

  makePixel : makePixel,
  makeCanvas : makeCanvas,
  setColor : setColor,
  makeColorSwatch : makeColorSwatch,
  clearCanvas : clearCanvas

  };
}

var paint = pixelPainter();


