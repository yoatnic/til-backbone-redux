import Marionette from "backbone.marionette";
import Home from "./components/pages/Home";
import store from "./Store";

class App extends Marionette.Application {
  get region() {
    return "main";
  }

  onStart() {
    this.showView(new Home({ store }));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();

  app.start();
});
