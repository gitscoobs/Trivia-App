const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')


startButton.addEventListener('click' , startGame)

function startGame() {
  console.log('started')
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  
}

// function to fetch data from the api
fetch(`https://opentdb.com/api.php?amount=5`) 
.then(response => response.json())
.then(data => addQuestions(data))


function addQuestions(data){
    
  for(let i = 0; i < data.results.length;  i++){
    var corAnswer = data.results[i].correct_answer
    var question = data.results[i].question

    const questionElement = document.createElement("div");
    questionElement.innerHTML = question;
    document.getElementById("questionDiv").appendChild(questionElement);

    const corAnswerElement = document.createElement("div");
    corAnswerElement.innerHTML = corAnswer;
    document.getElementById("corDiv").appendChild(corAnswerElement);

      for(let j = 0; j < data.results[i].incorrect_answers.length;  j++){
        var incAnswer = data.results[i].incorrect_answers[j]

          const incAnswerElement = document.createElement("div");
          incAnswerElement.innerHTML = incAnswer;
          document.getElementById("incDiv").appendChild(incAnswerElement);
          
        }
  }
}










 
