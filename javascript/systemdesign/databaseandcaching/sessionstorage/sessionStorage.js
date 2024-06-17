const toggleButton = document.querySelector(".toggle__btn");
const container = document.querySelector(".container");
toggleButton.addEventListener("click", toggleTheme);

function toggleTheme() {
  const localStr = sessionStorage.getItem("theme");

  if (localStr === "dark") {
    container.classList.add("light");
    container.classList.remove("dark");
  } else {
    container.classList.remove("light");
    container.classList.add("dark");
  }

  sessionStorage.setItem("theme", localStr === "dark" ? "light" : "dark");
}

function setTheme() {
  const localStr = sessionStorage.getItem("theme");
  if (localStr === "dark") {
    container.classList.add("dark");
    container.classList.remove("light");
  } else {
    container.classList.remove("dark");
    container.classList.add("light");
  }
}

setTheme();
