// Dark Mode Toggle
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been submitted.");
  e.target.reset();
});
