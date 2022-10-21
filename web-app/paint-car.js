//function that paints the car in the canvas
function paintCar(lightsOn, engineOn, gas) {
  //get the canvas and its context
  var canvas = document.getElementById("carCanvas");
  var ctx = canvas.getContext("2d");

  //clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //draw the car
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 100, 50);
  ctx.fillStyle = "red";
  ctx.fillRect(0, 50, 100, 50);

  //draw the lights
  if (lightsOn) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 100, 50);
  }

  //draw lights label
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Lights", 10, 20);


  //draw the engine
  if (engineOn) {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 50, 100, 50);
  }

  //draw engine label
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Engine", 10, 80);


  //draw the gas
  ctx.fillStyle = "black";
  ctx.fillRect(0, 100, 100, 50);
  ctx.fillStyle = "red";
  ctx.fillRect(0, 100, gas, 50);

  //draw gas label
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Gas", 10, 130);
}

export default paintCar;