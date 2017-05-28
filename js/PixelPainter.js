function pixelPainter(){
  var saveColor = "";
  var colorArr = ["red", "blue", "yellow", "green", "black", "orange", "purple"];


  function makePixel(){
    var pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.addEventListener("click", function(){
      this.style.backgroundColor = "black";
    });
    ppcanvas.appendChild(pixel);
  }

  function makeCanvas(w, h){
    var num = w * h;
    for (var i = 0; i < num; i++){
      makePixel();
      if (i % w === w-1){
        ppcanvas.appendChild(document.createElement("br"));
      }

    }
  }

  function colorSwatch(){
    var colorSet = document.createElement("div");
    colorSet.className = "colors";
    var colorCanvas = makeCanvas(2, 5);
    colorSet.appendChild(colorCanvas);

  }

  function setColor(color) {
    this.style.backgroundColor = color;
  }

  makeCanvas(30, 30);


  function clearCanvas() {
  var blkOut = document.querySelectorAll(".pixel");
  blkOut.style.backgroundColor = "black";
  console.log(blkOut);
  }

  var clear = document.createElement("button");
  clear.innerHTML = "clear";
  clear.addEventListener("click", function(){
    clearCanvas();
  });
  ppcanvas.appendChild(clear);

  return {

  makePixel : makePixel,
  makeCanvas : makeCanvas,
  setColor : setColor,
  colorSwatch : colorSwatch

  };
}

var paint = pixelPainter();




