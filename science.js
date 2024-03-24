document.addEventListener("DOMContentLoaded", function() {

    const questionElement = document.querySelector(".question");
    const optionElements = document.querySelectorAll(".options input");
    const scoreElement = document.querySelector(".score");
    const totalQuestionsElement = document.querySelector(".totalQuestions");
    const nextButton = document.querySelector(".nextbutton");

    let currentQuestionIndex = 0;
    let score = 0;

    // Load  Science questions
    const allQuestions = [...scienceQuestions];

    // Function to load a question
    function loadQuestion() {
        const currentQuestion = allQuestions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        // Populate options
        optionElements.forEach((option, index) => {
            option.nextElementSibling.textContent = currentQuestion.option[index];
            option.checked = false; 
        });

        // Update total questions counter
        totalQuestionsElement.textContent = `${currentQuestionIndex + 1} of ${allQuestions.length}`;
    }

    // Event listeners for option selection
    optionElements.forEach((option) => {
        option.addEventListener('change', function() {
            if (this.checked) {
                selectOption(this.nextElementSibling.textContent);
            }
        });
    });
    
      // Function to handle option selection
      function selectOption(selectedOptionText) {
        const selectedOptionIndex = allQuestions[currentQuestionIndex].option.indexOf(selectedOptionText);

        if (selectedOptionIndex !== -1) {
            const correctAnswerIndex = allQuestions[currentQuestionIndex].option.indexOf(allQuestions[currentQuestionIndex].answer);
            if (selectedOptionIndex === correctAnswerIndex) {
                score++;
                scoreElement.textContent = `Score: ${score}/${allQuestions.length}`;
            }
        }
    }

    // Event listener for the next button
    nextButton.addEventListener("click", () => {
        // Check if an option is selected
        const selectedOption = document.querySelector('.options input:checked');
        if (!selectedOption) {
            alert('Please select an option.');
            return;
        }

        // Move to the next question or finish the quiz
        if (currentQuestionIndex < allQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            // Finish the quiz
            alert(`Your highest score is ${score}/${allQuestions.length}`);
        }
    });

    loadQuestion();
});