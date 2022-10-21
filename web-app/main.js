import init, { greet, Car } from "my-module";
import paintCar from "./paint-car.js";

const runWasm = async () => {
  const wasm = await init();
  //greet();
  const car = new Car();
  car.start_engine();
  car.toggle_lights();
  paintCar(car.get_lights(), car.get_engine_status(), car.get_gas());

  //handle click event for toggle lights button
  document.getElementById("toggleLights").addEventListener("click", () => {
    car.toggle_lights();
    paintCar(car.get_lights(), car.get_engine_status(), car.get_gas());
  });
};

runWasm();