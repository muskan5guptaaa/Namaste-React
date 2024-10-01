const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "parent"
}, React.createElement("h1", {}, "i am h1 tag")));
const Heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "hello world");
console.log(parent) //object
;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
