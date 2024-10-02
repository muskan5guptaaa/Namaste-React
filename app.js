import React from "react";
import ReactDOM from "react-dom/client"
//react.createelement => object =>html element(render)
const heading=React.createElement("h1",
    {id:"heading"},"Namaste raect")
//jsx is not html is it like html
const jsxHeading=<h1 id="heading">Muskan gupta</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)