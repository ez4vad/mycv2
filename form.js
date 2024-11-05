function updateText() {
    const textElement = document.getElementById("responsiveText");
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 500) {
      textElement.textContent = "Get in Touch";
    }
  }
  updateText();
  
  window.addEventListener("resize", updateText);
  