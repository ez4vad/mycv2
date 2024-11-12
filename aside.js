const toggleButton = document.getElementById("toggleButton");
const sidePanel = document.getElementById("sidePanel");
const closeButton = document.getElementById("closeButton");


toggleButton.addEventListener("click", () => {
  sidePanel.classList.add("open");
});

closeButton.addEventListener("click", () => {
  sidePanel.classList.remove("open");
});


document.addEventListener("click", (event) => {
  if (!sidePanel.contains(event.target) && event.target !== toggleButton) {
    sidePanel.classList.remove("open");
  }
});
