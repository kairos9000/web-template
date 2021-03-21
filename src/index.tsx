import "./style/";
import { render } from "react-dom";
import { App } from "./component/App";

const reactContainer = document.getElementById("app");

render(<App />, reactContainer);
