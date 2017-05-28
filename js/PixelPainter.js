function pixelPainter(){
  var ppcolors = document.querySelector("#ppcolors");
  var ppcanvas = document.querySelector("#ppcanvas");
  var saveColor = "";
  var colorArr = ["red", "blue", "yellow", "green", "black", "orange", "purple"];


  function makePixel(elClassName, target){
    var pixel = document.createElement("div");
    pixel.className = elClassName;
    pixel.addEventListener("click", function(){
      this.style.backgroundColor = "black";
    });
    target.appendChild(pixel);
  }

  function makeCanvas(w, h){
    var num = w * h;
    for (var i = 0; i < num; i++){
      makePixel("pixel", ppcanvas);
      if (i % w === w-1){
        ppcanvas.appendChild(document.createElement("br"));
      }

    }
  }

  function makeColorSwatch(w, h){
    // var colorSet = document.querySelector("#ppcolors");
    // ppcolors.appendChild(colorCanvas);
    var num = w * h;
    for (var i = 0; i < num; i++){
      makePixel("colors", ppcolors);
      if (i % w === w-1){
        ppcolors.appendChild(document.createElement("br"));
      }

    }

  }

  function setColor(color) {
    this.style.backgroundColor = color;
  }
  // var colorCanvas = makeCanvas();
  makeColorSwatch(2, 10);
  makeCanvas(10, 10);


  // function clearCanvas() {
  // var blkOut = document.querySelectorAll(".pixel");
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
  // setColor : setColor,
  makeColorSwatch : makeColorSwatch

  };
}

var paint = pixelPainter();




