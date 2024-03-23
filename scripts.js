document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.querySelector(".register");
  
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

  // Your other script code here...
});


  

  const questionElement = document.querySelector(".question");
  const optionElements = document.querySelectorAll(".options input");
  const scoreElement = document.querySelector(".score");
  const totalQuestionsElement = document.querySelector(".totalQuestions");
  const nextButton = document.querySelector(".nextbutton"); 

  let currentQuestionIndex = 0;
  let score = 0;

  function loadQuestion() {
    const currentQuestion = Questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Populate options
    optionElements.forEach((option, index) => {
      option.textContent = currentQuestion.option[index];
      option.classList.remove('selected');
      option.addEventListener('click', () => selectOption(option.textContent));
    });

    // Update total questions counter
    totalQuestionsElement.textContent = `${currentQuestionIndex + 1} of ${scienceQuestions.length}`;
  }

  // Event listeners for option selection
  optionElements.forEach((option) => {
    option.addEventListener("click", () => {
      const parentOption = option.parentElement;
      const selectedOption = document.querySelector('.options.selected');
      
      if (selectedOption) {
        selectedOption.classList.remove('selected');
      }
      parentOption.classList.add('selected');
    });
  });

  // Event listener for the next button
  nextButton.addEventListener("click", () => {
    
   
    
    if (currentQuestionIndex < scienceQuestions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      // Finish the quiz
      alert(`Quiz finished! Your final score is ${score}/${scienceQuestions.length}`);
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.querySelector(".nextbutton");
  
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        const selectedOption = document.querySelector('.options radio.selected');
      
  
        // Process selected option
        selectOption(selectedOption.textContent);
      });
    } else {
      console.error("Next button not found..");
    }
  
    // Rest of your script...
  });
  

