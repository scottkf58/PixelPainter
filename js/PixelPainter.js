function pixelPainter(){
  var ppcolors = document.querySelector("#ppcolors");
  var ppcanvas = document.querySelector("#ppcanvas");
  var something = document.querySelector(".pixel");

  var preColor = "black";
  var currColor;
  var colorArr = ["red", "blue", "yellow", "green", "black", "orange", "purple", "brown", "gray", "salmon"];


  function makePixel(elClassName, target){
    var pixel = document.createElement("div");
    pixel.className = elClassName;
    // pixel.addEventListener("click", function(){
    //   this.style.backgroundColor = "black";
    // });
    target.appendChild(pixel);
    return pixel;
  }

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

  function makeColorSwatch(w, h){
    // var colorSet = document.querySelector("#ppcolors");
    // ppcolors.appendChild(colorCanvas);
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

  function setColor(){
    preColor = this.style.backgroundColor;
    currColor = preColor;
    console.log(currColor);
  }

 function paintColor(){
    this.style.backgroundColor = currColor;
    console.log(currColor);
  }





// pixel.addEventListener("click", function(){
//         this.style.backgroundColor = "black";

//       });

  makeColorSwatch(2, 5);
  makeCanvas(30, 30);


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
  setColor : setColor,
  makeColorSwatch : makeColorSwatch

  };
}

var paint = pixelPainter();




