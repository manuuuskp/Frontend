let starList = document.querySelectorAll(".star");
let starContainer = document.querySelector(".starMainContainer");
let smileyContainer = document.querySelector(".smileyContainer");
let currentRate = 0;
let smileyArr = ["😖", "😞", "🙂", "😀", "🤩"];

for (let star of starList) {
  star.addEventListener("mouseover", onMouseOver);
  star.addEventListener("mouseleave", onMouseLeave);
  star.addEventListener("click", selectRating);
}

function onMouseOver(e) {
  const mouseOverIdx = e.target.dataset.index;
  for (let i = 0; i < starList.length; i++) {
    if (i < +mouseOverIdx) {
      starList[i].classList.remove("star-empty");
      starList[i].classList.add("star-filled");
    } else {
      starList[i].classList.add("star-empty");
      starList[i].classList.remove("star-filled");
    }
  }
}

function onMouseLeave() {
  for (let i = 0; i < starList.length; i++) {
    if (i < currentRate) {
      starList[i].classList.remove("star-empty");
      starList[i].classList.add("star-filled");
    } else {
      starList[i].classList.add("star-empty");
      starList[i].classList.remove("star-filled");
    }
  }
}

function selectRating(e) {
  currentRate = +e.target.dataset.index;
  smileyContainer.innerHTML = smileyArr[currentRate - 1];
}
