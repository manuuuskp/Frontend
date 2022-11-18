// Abort controller is an interface that provides the controller object which we can use to abort any webrequests at any time we need.
// It has interface object called signal and has interface method called abort().

const controller = new AbortController();
const abortSignal = controller.signal;

async function fetchRequest() {
  try {
    const response = await fetch("www.example.com/posts", {
      signal: abortSignal,
    });
    const dataRes = await response.json();
  } catch (err) {
    if (err.name === "Aborterror") {
      console.log("This fetch request is aborted");
    }
  }
}

document.getElementById("abortbutton").addEventListener("click", () => {
  controller.abort();
});
