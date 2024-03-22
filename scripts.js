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

function redirectToQuizPage(categoryId) {
  // Redirect to the quiz page based on the category ID
  if (categoryId === 1) {
    window.location.href = 'quiz1.html';
  } else if (categoryId === 2) {
    window.location.href = 'quiz2.html';
  }
}
});

  