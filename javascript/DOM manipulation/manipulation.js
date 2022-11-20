// DOM - SELECTING(QUERYING) THE ELEMENT NODE

// document.querySelector and document.querySelectorAll are the methods to get any DOM element using the
// querying format (like css standard querying)

// syntax - document.querySelector(CSS selector)

let getNodeUsingClass = document.querySelector(".classname");
let getNodeUsingId = document.querySelector("#idname");
let getPElementInsideDiv = document.querySelectorAll("div > p");

// difference between querySelector and querySelectorAll is that querySelector selects only the first element
// that matches the query.

// *****************************************************************

document.getElementById("element id"); // get Element by Id of the element:
document.getElementsByName("element name"); // get element by name attr of the element
document.getElementsByClassName("element classname"); // get element by class name attr of the element
document.getElementsByTagName("element tag name"); // get element by tag name of the element
document.getElementsByTagNameNS("namespace", "tag name"); // get element by tag name of the element but in the mentioned namespace

// **********************************************************************************************

// CLONING THE NODE :

// clonenode method as the name says is used to clone the node.

let getAnyNode = document.querySelector(".elementClass");
let clonedNode = getAnyNode.cloneNode();
let clonedNode1 = getAnyNode.cloneNode(deep);

// cloneNode() -> clones only that particular Node.
// cloneNode(true) -> clones its descendants.
