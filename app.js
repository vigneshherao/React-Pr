import React from "react";
import ReactDom from "react-dom/client";



const parent = React.createElement("h1",{},"this is heading");

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parent);