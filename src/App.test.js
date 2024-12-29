import App from "./containers/App.jsx"
import { it } from "@jest/globals";
import {createRoot} from "react-dom/client";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<App />);
  root.unmount();
});
