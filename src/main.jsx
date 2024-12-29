import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App.jsx";
import "./index.css";
import store from "./store/index.js";
import * as serviceWorker from "./service.worker.js";

const root = createRoot(document.getElementById("root"));
function renderApp() {
  fancyLog();
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
function fancyLog() {
  console.log("%c Rendered with👌👍", "background: purple; color: #fff");
  console.log(store.getState());
}
renderApp();
store.subscribe(renderApp);

serviceWorker.unregister();
