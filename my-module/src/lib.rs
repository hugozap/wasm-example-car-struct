mod utils;
use wasm_bindgen::prelude::*;
use web_sys::console::log_1;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
    fn parseInt(s: &str) -> i32;
}

#[wasm_bindgen]
struct Car {
    pub engineOn: bool,
    pub lightsOn: bool,
    pub gas: i32,
}

#[wasm_bindgen]
impl Car {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Car {
        Car {
            engineOn: false,
            lightsOn: false,
            gas: 30,
        }
    }
    #[wasm_bindgen]
    pub fn start_engine(&mut self) {
        self.engineOn = true;
    }

    #[wasm_bindgen]
    pub fn toggle_lights(&mut self) {
        self.lightsOn = !self.lightsOn;
        self.gas -= 5;
        self.update_gas();
    }

    fn update_gas(&mut self) {
        if self.gas < 0 {
            self.lightsOn = false;
            self.engineOn = false;
        }
    }

    #[wasm_bindgen]
    pub fn get_engine_status(&self) -> bool {
        self.engineOn
    }

    #[wasm_bindgen]
    pub fn get_gas(&self) -> i32 {
        self.gas
    }
    #[wasm_bindgen]
    pub fn get_lights(&self) -> bool {
        self.lightsOn
    }
}

#[wasm_bindgen]
pub fn greet() {
    let x = parseInt("42");
    log_1(&format!("x = {}", x).into());
    alert(&format!("Hello, world!!! {}", x));
}
