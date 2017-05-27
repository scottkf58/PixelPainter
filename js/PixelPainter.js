// function pixelPainter(){ //paint module

  function makePixel(){
    var pixel = document.createElement("div");
    pixel.className = "pixel";
    ppcanvas.appendChild(pixel);
  }

  // makePixel();

  function makeCanvas(num){
    for (var i = 0; i < num; i++){
      makePixel();
    }
  }
  makeCanvas(100);


// return {

//   makePixel : makePixel

// };

// }
