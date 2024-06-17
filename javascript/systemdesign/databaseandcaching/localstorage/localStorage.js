const toggleButton = document.querySelector(".toggle__btn");
const container = document.querySelector(".container");
toggleButton.addEventListener("click", toggleTheme);

function toggleTheme() {
  const localStr = localStorage.getItem("theme");

  if (localStr === "dark") {
    container.classList.add("light");
    container.classList.remove("dark");
  } else {
    container.classList.remove("light");
    container.classList.add("dark");
  }

  localStorage.setItem("theme", localStr === "dark" ? "light" : "dark");
}

function setTheme() {
  const localStr = localStorage.getItem("theme");
  if (localStr === "dark") {
    container.classList.add("dark");
    container.classList.remove("light");
  } else {
    container.classList.remove("dark");
    container.classList.add("light");
  }
}

setTheme();
