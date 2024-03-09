function submitQuiz() {
  var answers = ["A", "B", "C", "A","B","C","C","A","C","B"]; // Correct answers
  var totalQuestions = 10;
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

  // write score to data.json {"score": score}
  
  // open file data.json
  var fs = require("fs");
  fs.writeFile("data.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  // Redirect to the result page with the score as a query parameter
  window.location.href = "cuoikhoa8/result";
}
