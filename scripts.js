import setQuizDataToLocalStorage from "./quiz";

document.addEventListener("DOMContentLoaded", function() {

  // Logic for login form submission
  const loginForm = document.getElementById(".register");

  if (loginForm) {
      loginForm.addEventListener("submit", function(event) {
          event.preventDefault();
          const username = document.getElementById("username").value;
          const email = document.getElementById("email").value;
          console.log("Username:", username);
          console.log("Email:", email);
          // Here you can add further logic, like sending the login data to a server for validation
      });
  } else {
      console.error("Login form not found..");
  }

});

