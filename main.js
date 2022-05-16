const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('quiz-container')

startButton.addEventListener('click' , startGame)

function startGame() {
  console.log('started')
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  
}

//https://opentdb.com/api.php?amount=5
// function to fetch data from the api
fetch(`https://opentdb.com/api.php?amount=5&type=multiple`) 
.then(response => response.json())
.then(data => addQuestions(data))

function addQuestions(data){
    
  for(let i = 0; i < data.results.length;  i++){
    // var corAnswerText = data.results[i].correct_answer
    
    // ALL QUESTIONS
    let allAnswers = data.results[i].incorrect_answers
    allAnswers.push(data.results[i].correct_answer)

    // Creates container
    var containerElement = document.createElement("div")
    containerElement.classList.add("question-container")

    // Create P tag and set inner text to question
    var questionElement = document.createElement("p")
    var questionText = data.results[i].question
    questionElement.innerHTML = questionText
    containerElement.append(questionElement)

    // Create Button container
    var buttonContainerElement = document.createElement("div")
    buttonContainerElement.classList.add("btn-grid")

    var corAnswerText = data.results[i].correct_answer

    for(let j = 0; j < allAnswers.length;  j++){
      var answerElement = document.createElement('button')
      var answerText = data.results[i].incorrect_answers[j]
      answerElement.innerHTML = answerText
      if(answerText === corAnswerText){
        answerElement.classList.add("correct-answer")
      }
      // APEND ELMENT TO BUTTON CONTAINER
      buttonContainerElement.append(answerElement)
    }
    containerElement.append(buttonContainerElement)
    document.getElementById('quiz-container').append(containerElement)
  }
}


      //   <div class="question-container">
      //   <p class="question"></p>
      //     <div class="btn-grid">
      //       <button  class="btn">1</button>
      //       <button  class="btn">2</button>
      //       <button  class="btn">3</button>
      //       <button  class="btn">4</button>
      //     </div>
      // </div>

        //Attempt at shuffling answers together 
        // var incAnswerButton = data.results[i].incorrect_answers[j]
        // var corAnswerButton = data.results[i].correct_answer
        // function shuffleArray(arr) {
        //   arr.sort(() => Math.random() - 0.5);
        // }
        // let arr = [incAnswerButton];
        // shuffleArray(arr);
        // console.log(arr)

        // const incAnswerElement = document.createElement('button');
        // incAnswerElement.innerHTML = incAnswer;
        // document.getElementById("incDiv").appendChild(incAnswerElement);

        // const merge = (first, second) => {
        //   for(let i=0; i<second.length; i++) {
        //     first.push(second[i]);
        //   }
        //   return first;
        // }
        
        // let merged = merge([corAnswer], [incAnswer]);
        // console.log(merged);
          

        // let merged = [...corAnswer, ...incAnswer];
        // console.log(merged);