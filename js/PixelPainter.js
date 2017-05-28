function pixelPainter(){
  var saveColor = "";

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
      if (i % 10 === 9){
        console.log(i);
        ppcanvas.appendChild(document.createElement("br"));
      }

    }
  }

  function setColor(color) {
    this.style.background = color;
  }

  function erase() {
    setColor();
  }

  var canvas = makeCanvas(10, 10);

  // document.body.addEventListener("click", test.setColor("black"));


  function clearCanvas() {
  var blkOut = document.querySelectorAll(".pixel");
  //for (var i = 0; i < whiteOut.length; i++){
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
  setColor : setColor

  };
}

var paint = pixelPainter();




