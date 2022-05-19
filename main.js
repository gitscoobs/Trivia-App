
const submitButton = document.getElementById('submit');
const questionContainerElement = document.getElementById('quiz-container')
var allCorrectAnswers = []




function showResults() {
  let error = document.querySelector('#error')
  error.innerHTML = '';
  for (let i = 0; i < allCorrectAnswers.length; i++) {
    if (!document.querySelector('input[name=question' + i + ']:checked')) {
      error.innerHTML = 'Select an Answer for each Question!'
      return
    }
  }

  let numCorrect = 0
  allCorrectAnswers.forEach(function (item, i) {
    let submittedAnswer = (document.querySelector('input[name=question' + i + ']:checked')).value
    let questionContainer = document.querySelector('.questionContainer' + i + '')
    questionContainer.classList.remove("correct")
    questionContainer.classList.remove("false")
    if (item === submittedAnswer) {
      console.log('correct!')
      questionContainer.classList.add('correct')
      numCorrect = numCorrect + 1
    } else {
      console.log('false')
      questionContainer.classList.add('false')
    }
  })
  document.querySelector('#amountCorrect').innerHTML = numCorrect
  document.querySelector('#amountAllQuestions').innerHTML = allCorrectAnswers.length
}

submitButton.onclick = function () {
  showResults()
}

fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
  .then(response => response.json())
  .then(data => addQuestions(data))

function addQuestions(data) {

  for (let i = 0; i < data.results.length; i++) {
    var containerElement = document.createElement("div")
    containerElement.classList.add("question-container")
    containerElement.classList.add("questionContainer" + i + "")
    let allAnswersHTML = []
    let allAnswers = data.results[i].incorrect_answers
    allAnswers.push(data.results[i].correct_answer)
    allCorrectAnswers.push(data.results[i].correct_answer)

    for (let j = 0; j < allAnswers.length; j++) {
      allAnswersHTML.push(
        '<label>'
        + '<input type="radio" name="question' + i + '" value="' + allAnswers[j] + '">'
        + allAnswers[j]
        + '</label>'
      );
    }

    let answersContainer = document.createElement('div')
    answersContainer.classList.add('flex-row')
    answersContainer.innerHTML = allAnswersHTML.join('')
    containerElement.append(answersContainer)
    let questionElement = document.createElement("p")
    let questionText = data.results[i].question
    questionElement.innerHTML = questionText
    containerElement.prepend(questionElement)

    document.getElementById('quiz-container').append(containerElement)
  }
}
