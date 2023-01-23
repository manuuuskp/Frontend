// GENERAL:
Node < --Element < --HTMLElement;

// All DOM objects are Nodes and Element is a type of a Node which DOM API returns.
// Node is an interface which Element inherits.

// To check the node type there is a property called "nodeType".
// All elements will have nodeType as 1.

// DOM - CREATE AN ELEMENT :

document.createElement(tagname);
document.createTextNode(string);

// These are methods to create the element and text Node.

// **********************************************************************************************

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

// NOTE:
// The "getElements" query always returns the live elements.
// Meaning - we are assigning "document.getElementsByClassName('element classname')" to a variable.
// Now inbetween even if the DOM changes and after that if we use the variable it will be updated automatically.
// No need to call "document.getElementsByClassName('element classname')" again.
// **********************************************************************************************

// CLONING THE NODE :

// clonenode method as the name says is used to clone the node.

let getAnyNode = document.querySelector(".elementClass");
let clonedNode = getAnyNode.cloneNode();
let clonedNode1 = getAnyNode.cloneNode(deep);

// cloneNode() -> clones only that particular Node.
// cloneNode(true) -> clones its descendants.

// ************************************************************************************************

// INSERTING/APPENDING IN THE DOM :

element.insertAdjacentElement(position, element); // element -> target element
// This inserts the element in the specified position.

// position :
// beforebegin - inserts the element before the target element.
// afterbegin - inserts the element inside the target element but before the first child.
// beforeend - inserts the element inside the target element but after the last child.
// afterend - inserts the element after the target element.

// for beforebegin and afterend - target should have a parent.

element.insertAdjacentHTML(position, element);
//This is same as insertAdjacentElement on a condition that this parses the element to a HTML and then appends the element.
//  position as same as earlier.
element.insertAdjacentText(position, text);
// This is same as the insertAdjacentElement on a condition that this will not parse the element but will insert the Node.
// so to insert the text node this should be used.

element.append(param1, param2, etc);
// append method appends the elements after the last child of the target element.
element.prepend(param1, param2, etc);
//prepend the elements before the first child of the target element.
Node.appendChild(child);
// Append child method appends the child after the last child of the parent node.
// appendChild will take only one child as argument.
// difference between append and appendChild is that append accepts string object whereas appendChild appends Node object.
// append returns nothing whereas appendChild returns appended node object.

// *********************************************************************************************

// REMOVE THE HTML ELEMENT :

element.remove(); //- removes the target element and its descendants from the DOM.

// ************************************************************************************************

// NODE Instance properties :

// Nodes include elements, text, comment etc.,
// so it returns any node type.
// NOTE : even the whitespace between two HTML element is considered text node.
childNodes; // returns the Nodelist containing the child nodes.
firstChild; // returns the first child of the node or null if there is no child.
lastChild; // returns the last child of the node or null if there is no child.
nextSibling; //returns next sibling. if the element is the last child then null will be returned.
previousSibling; //returns previous sibling. if the element is the first child then null will be returned.
nodeName; //returns the node name. for element node type it will be Tag name. for text it will be "#text".
nodeType; //returns the node type. for element type it is 1. for text type it is 3. etc.,
parentElement; //returns the element of any node. NOTE ; this is parentElement not parentNode.
parentNode; //returns the parentNode.
textContent; //textContent returns the text content of the node and its descendants.

// NODE Instance methods :

contains(); //checks if the node is present as a child node. it checks for all the descendants.
hasChildNodes(); //checks if the node has a child and returns boolean.
targetnode.insertBefore(newnode, reference); // inserts the new node inside the target node before the reference node.
element.removeChild(element_to_be_removed); // removes the mentioned element from the target element.

// ********************************************************************************************************
// Element instance properties :
children; //provides all the child element nodes.
classList; //provides the classList of the element.
clientHeight; //provides the width of the element - CSS height + CSS padding. it doesnt include border and margin.
clientWidth; //same as clientHeight but provides the width of the element.
firstElementChild; //provides first child element.
lastElementChild; //provides last element child.
innerHTML; //provides the inner content of the target.
nextElementSibling; //provides next sibling element. if no next sibling then returns null.
previousElementSibling; //provides previous element. if no previous sibling thenr returns null.
scrollHeight; //provides the height of the page including the content that is not visible due to scroll.
scrollTop; //provides the number of px that the elements content is scrolled vertically.
tagName; //provides the tag name of the element. example - div will give "DIV" as tagName.
outerHTML; //provides the string object of the HTML element and its descendants.

//Element Methods :
targetElement.after(new element()); //inserts the new element inside the target element's parent. next to target element.
targetElement.before(new element()); //inserts the new element inside the target element's parent before the target element.
targetElement.animate(transform_obj, timig_obj); //used to produce animation in js.
element.closest(CSS_Selector); //used to reach the closest ancestor.
getAttribute(name); //returns the attribute value with that attriute name.
setAttribute(name, value); //creates a new attribute of that element.
hasAttribute(name); //checks if that attribute is present or not.
removeAttribute(name); //removes the attribute.
getBoundingClientRect(); // provides the element's top, bottom, left, right, width and height to the viewport.
scrollIntoView(alignToTop); //scrolls the parent container to be visible to the user.
scrollTo(x - coords, y - coords); //scrolls the container to a particular point.
