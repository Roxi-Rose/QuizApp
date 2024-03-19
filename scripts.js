document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  
  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      console.log("Username:", username);
      console.log("Password:", password);
    });
  } else {
    console.error("Login form nt found..");
  }

  const startbtn = document.querySelector('.Start');
  const guide = document.querySelector('.Guide');
  const exitbtn = document.querySelector('.btn');
  const main = document.querySelector('.main');
  const continuebtn= document.querySelector('.continue');
  const quizSection= document.querySelector('.quiz-section');
  const quizBox= document.querySelector('.quiz-box');

startbtn.onclick = () => {
  guide.classList.add('active');
  main.classList.add('active');
}

exitbtn.onclick = () => {
  guide.classList.remove('active');
  main.classList.remove('active');
}

continuebtn.onclick = () => {
  quizSection.classList.add('active');
  guide.classList.remove('active');
  main.classList.remove('active');
  quizBox.classList.add('active');

  showquestions(0);

}



let countQuestion = 0;
let countNumb = 1;

const nextBtn = document.querySelector('.nextbutton');

nextBtn.onclick = () => {
  if (countQuestion < questions.length - 1) {
    countQuestion++;
    showquestions(countQuestion);

    questionNumb++;
    counter(questionNumb);
  }

  else {
    console.log('done');
  }
  
}

const choiceList = document.querySelector('.choice-list');

// getting questions and choices from array
function showquestions(index) {
  const questionText = document.querySelector('.question');
  questionText.textContent = `${index + 1}. ${questions[index].question}`;

  let choiceTag =`<div class="choice"><span>${questions[index].choice[0]}</span></div>
  <div class="choice"><span>${questions[index].choice[1]}</span></div>
  <div class="choice"><span>${questions[index].choice[2]}</span></div>
  <div class="choice"><span>${questions[index].choice[3]}</span></div>`;

  choiceList.innerHTML = choiceTag;

  const choice = document.querySelectorAll('.choice');
  for (let i = 0; i < choice.length; i++) {
    choice[i].setAttribute('onclick','optionSelected(this)');
  }
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  console.log(userAnswer);
}

function counter(index) {
  const Toatlques = document.querySelector('.totalQuestions');
  Toatlques .textContent = `${index} of ${questions.length} Questions`;
}
});