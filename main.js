const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

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
    var corAnswer = data.results[i].correct_answer
    var question = data.results[i].question

    const questionElement = document.createElement('div');
    questionElement.innerHTML = question;
    document.getElementById("questionDiv").appendChild(questionElement);

    // const corAnswerElement = document.createElement('button');
    // corAnswerElement.innerHTML = corAnswer;
    //  document.getElementById("corDiv").appendChild(corAnswerElement);

      for(let j = 0; j < data.results[i].incorrect_answers.length;  j++){
        var incAnswer = data.results[i].incorrect_answers[j]

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

        

      

        }
    }
}