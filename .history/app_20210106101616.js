import { Text } from "./text.js";
class App {
  constructor() {
    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fontactive: () => {
        this.text = new Text();
        this.text.setTe;
      },
    });
  }
}

window.onload = () => {
  new App();
};
