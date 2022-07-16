const alert = document.querySelector('#alert')
const form = document.getElementById('quiz-form')
// turn the HTML collection into an array
const correctAnswer = Array.from(document.querySelectorAll('.answer'))

const questions = document.querySelectorAll('.question-item')

form.addEventListener('submit', (behavior) => {
  //  Prevent the default behaviour
  behavior.preventDefault()

  // make unanswered questions show up as incorrect
  // remove the class from all question items before checking the correct answers
  questions.forEach((question) => {
    question.classList.add('incorrect')
    question.classList.remove('correct')
  })

  //   Get all selected answers
  const checkedAnswers = correctAnswer.filter((answer) => answer.checked)
  console.log('checkedAnswers', checkedAnswers)

  //    Loop through the selected answer to see if they are correct or not
  //    For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
  checkedAnswers.forEach((answer) => {
    const correct = answer.value === 'true'
    const questionItem = answer.closest('.question-item')

    if (correct) {
      // this logic is necessary so that the correct class is used.  In the CSS the incorrect class is defined last so it used by default
      questionItem.classList.add('correct')
      questionItem.classList.remove('incorrect')
    } else {
      questionItem.classList.add('incorrect')
      questionItem.classList.remove('correct')
    }
    console.log(answer.name)
  })

  // the every() method was not wokring so I hacked a bit
  const alertWindow = () => {
    if (
      checkedAnswers[0].value === 'true' &&
      checkedAnswers[1].value === 'true' &&
      checkedAnswers[2].value === 'true'
    ) {
      alert.classList.add('active')
      setTimeout(() => {
        alert.classList.remove('active')
      }, 2000)
    }
  }
  alertWindow()
})
