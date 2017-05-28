function pixelPainter(){
  var saveColor = "";

  function makePixel(){
    var pixel = document.createElement("div");
    pixel.className = "pixel";
    ppcanvas.appendChild(pixel);
  }

  function makeCanvas(num){
    for (var i = 0; i < num; i++){
      makePixel();
    }
  }

  function setColor(color) {
    this.style.background = color;
  }

  function erase() {
    setColor();
  }

  var canvas = makeCanvas(100);

  // pixel.addEventListener("click", test.setColor("black"));


  // function clearCanvas() {
  // var blkOut = document.querySelectorAll(".pixel");
  // //for (var i = 0; i < whiteOut.length; i++){
  // blkOut.style.backgroundColor = "black";
  // console.log(blkOut);
  // }

  // var clear = document.createElement("button");
  // clear.innerHTML = "clear";
  // clear.addEventListener("click", function(){
  //   clearCanvas();
  // });
  // ppcanvas.appendChild(clear);

  return {

  makePixel : makePixel,
  makeCanvas : makeCanvas,
  setColor : setColor

  };
}

var test = pixelPainter();
// test.clearCanvas();

var pixel = document.querySelectorAll(".pixel");
pixel.addEventListener("click", test.setColor("black"));


