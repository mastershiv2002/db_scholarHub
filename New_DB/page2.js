// Optional: Add custom interactivity if needed
console.log("Page loaded successfully!");

// Example of interactivity: Change button text on click
document.querySelectorAll(".subject-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Clicked!";
  });
});
