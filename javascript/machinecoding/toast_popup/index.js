let verticalPosition = document.querySelector(".verticalPosition");
let horizontalPosition = document.querySelector(".horizontalPosition");
let toastType = document.querySelector(".toastType");
let duration = document.querySelector(".duration");
let toasterContent = document.querySelector(".toasterContent");
let toasterContentInput = document.querySelector(".toasterContentInput");
let showToasterBtn = document.querySelector(".showToaster");
let toasterContainer = document.querySelector(".toasterContainer");
let template = document.getElementsByTagName("template")[0];

function showToaster() {
  let templateItem = template.content.firstElementChild.cloneNode(true);
  toasterContainer.classList.add(verticalPosition.value);
  toasterContainer.classList.add(horizontalPosition.value);
  templateItem.classList.add(toastType.value);
  templateItem.querySelector(".toasterContent").textContent =
    toasterContentInput.value;
  if (verticalPosition.value === "top") {
    toasterContainer.prepend(templateItem);
  }
  toasterContainer.append(templateItem);
  removeToaster(templateItem);
}

function removeToaster(templateItem) {
  let timer = setTimeout(() => {
    toasterContainer.removeChild(templateItem);
  }, duration.value * 1000);
  closeToaster(templateItem, timer);
}

function closeToaster(templateItem, timer) {
  templateItem
    .querySelector(".toasterContent--close")
    .addEventListener("click", () => {
      clearTimeout(timer);
      toasterContainer.removeChild(templateItem);
    });
}

showToasterBtn.addEventListener("click", showToaster);
