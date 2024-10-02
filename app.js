import React from "react";
import ReactDOM from "react-dom/client"


//react.createelement => object =>html element(render)
const heading=React.createElement("h1",
    {id:"heading"},"Namaste raect")


//jsx is not html is it like html
const jsxHeading=<h1 id="heading">Muskan gupta</h1>

//react component
//class based comp-old way to writing codeeeeeeee


//functional based comp-new way
const HeadingComponenet=()=>{
    <div id="container">
  
    <h1 className="heading">Namaste react dunc </h1>
    </div>
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponenet/>)