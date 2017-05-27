// function pixelPainter(){ //paint module

  function makePixel(){
    var pixel = document.createElement("div");
    pixel.className = "pixel";
    ppcanvas.appendChild(pixel);
  }

  // makePixel();

  function makeCanvas(num){
    for (var i = 0; i <= num; i++){
      makePixel();
    }
  }
  makeCanvas(1000);


// return {

//   makePixel : makePixel

// };

// }
