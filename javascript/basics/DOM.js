// element node, text node and comment node

document.querySelector(".classname");
document.querySelectorAll(".classname"); //nodelist
document.getElementById("idname");
document.getElementsByClassName("classname");
document.getElementsByTagName("tagname");
document.getElementsByName("name");

const one = document.querySelector(".elementone");
const two = document.querySelector(".elementtwo");
one.children;
one.firstElementChild;
one.lastElementChild;
one.parentElement;
one.nextElementSibling;
one.previousElementSibling;

one.childNodes;
one.firstChild;
one.lastChild;
one.parentNode;
one.previousSibling;
one.nextSibling;

one.contains(two);

one.nodeType;
one.tagName;
one.innerHTML;
one.textContent;

one.insertAdjacentElement("afterbegin", two); //as first child
one.insertAdjacentElement("beforebegin", two); //as previous sibling
one.insertAdjacentElement("afterend", two); // as next sibling
one.insertAdjacentElement("beforeend", two); //as last child

one.getAttribute("attr name");
one.removeAttribute("attr name");
one.remove();

one.appendChild(two);
one.insertBefore(two, one.firstElementChild); //inserts inside one but before the first element of one

one.cloneNode(true); //clones the node
one.closest("p"); // selects the closest p tag relative to "one" element