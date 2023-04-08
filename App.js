// 
// 
// <div id="parent">
// <div id="child">
// <h1></h1>
// </div>
// </div>
// 
// 
// 

const parent = React.createElement("div",{ id: "parent" },React.createElement(
        "div",
        { id: "children" },
        [React.createElement(
            "h1",
            {},
            "Hello World from React(Children1)!"
        ),
        React.createElement(
            "h2",
            {},
            "Hello World from React(Children2)!"
        )

        ]
    )
)
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)




// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// // This method is used to convert this h1 element into h1 tag and put it into DOM/webpage
// root.render(heading);