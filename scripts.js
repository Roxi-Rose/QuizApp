document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementsByClassName("register");
  
  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      console.log("Username:", username);
      console.log("Email:", email);
    });
  } else {
    console.error("Login form not found..");
  }

  const startbtn = document.querySelector('.Start');

startbtn.onclick = () => {
  guide.classList.add('active');
  main.classList.add('active');
}


});