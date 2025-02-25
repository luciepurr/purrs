document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactform");
    const usernameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    form.addEventListener("submit", function (event) {
       
    // Initialize an array to store error messages
    const errors = [];
       
    // Validation for sender's name (minimum length of 2 chars)
    if (usernameInput.value.length < 2) {
    errors.push("Name must be at least 2 characters long.");
    }
       
    // Validation for email (must be a valid email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
    errors.push("Please enter a valid email address.");
    } 
       
    // If there are errors, prevent form submission and display them
    if (errors.length > 0) {
    event.preventDefault(); // Prevent form submission
    alert(errors.join("\n")); // Display error messages in an alert
    }
    });
});
