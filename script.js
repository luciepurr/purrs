document.addEventListener("DOMContentLoaded", function () { 
   const form = document.getElementById("contact"); 
   const nameInput = document.getElementById("sender"); 
   const emailInput = document.getElementById("email"); 
  
   form.addEventListener("submit", function (event) { 
       // Initialize an array to store error messages 
       const errors = []; 
  
       // Validation for sender (minimum length of 3 characters) 
       if (nameInput.value.length < 3) { 
           errors.push("Name must be at least 3 characters long."); 
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
