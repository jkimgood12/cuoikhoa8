function submitQuiz() {
  var answers = ["A", "B", "C", "A"]; // Correct answers
  var totalQuestions = 4;
  var score = 0;

  for (var i = 1; i <= totalQuestions; i++) {
    var selectedOption = document.querySelector(
      'input[name="q' + i + '"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === answers[i - 1]) {
        score++;
      }
    }
  }

  // Redirect to the result page with the score as a query parameter
  window.location.href = "result.html?score=" + score;
}
