function generateSelector(root, target) {
  const selector = [];
  while (target !== root) {
    const targetPosition =
      Array.from(target.parentElement.children).indexOf(target) + 1;
    const tagName = target.parentElement.tagName.toLowerCase();
    selector.unshift(`${tagName}:nth-child(${targetPosition})`);
    target = target.parentElement;
  }
  selector.unshift(`${target.tagName.toLowerCase()}[id='${target.id}']`);

  return selector.join(">");
}

const root = document.getElementById("root");
const target = document.getElementById("target");
console.log(generateSelector(root, target));

// Output: "div[id='root'] > section:nth-child(2) > p:nth-child(1) > span:nth-child(1) > button:nth-child(2)";
