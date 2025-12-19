// Slide Navigation
function showSlide(id) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => slide.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector(".nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

// Order Now Button Functionality
function goToOrder(food, price) {
  showSlide("order");
  document.getElementById("food-name").value = `${food} - $${price}`;
}

// Handle order form submission
document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("customer-name").value;
  const food = document.getElementById("food-name").value;
  const quantity = document.getElementById("quantity").value;

  document.getElementById(
    "order-success"
  ).textContent = `Thank you, ${name}! Your order of ${quantity} x ${food} has been placed successfully.`;

  // Reset form
  document.getElementById("order-form").reset();
});
