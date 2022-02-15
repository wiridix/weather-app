import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ContextSettings } from "./context/ContextSettings";
import "antd/dist/antd.css";

ReactDOM.render(
    <React.StrictMode>
        <ContextSettings>
            <App />
        </ContextSettings>
    </React.StrictMode>,
    document.getElementById("root")
);
