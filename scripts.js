//document.addEventListener('DOMContentLoaded', function() {

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
//});

let countQuestion = 0;

const nextBtn = document.querySelector('.nextbutton');

nextBtn.onclick = () => {
  if (countQuestion < questions.length - 1) {
    countQuestion++;
    showquestions(countQuestion);
  }

  else {
    console.log('done');
  }
  
}

const choiceList = document.querySelector('.choice-list');

// getting questions and choices from array
function showquestions(index) {
  const questionText = document.querySelector('.question');
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag =`<div class="choice"><span>${questions[index].options[0]}</span></div>
  <div class="choice"><span>${questions[index].options[1]}</span></div>
  <div class="choice"><span>${questions[index].options[2]}</span></div>
  <div class="choice"><span>${questions[index].options[3]}</span></div>`;

  choiceList.innerHTML = optionTag;
}