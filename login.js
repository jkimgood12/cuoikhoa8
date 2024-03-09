var users = []; // Array to store user credentials

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var user = users.find(function(u) {
    return u.username === username && u.password === password;
  });

  if (user) {
    alert("Login successful!");
    window.location.href = "/quiz.html";
    // Perform redirection or other actions
  } else {
    alert("Invalid credentials. Please try again.");
  }
}
function showSignupForm() {
    var signupForm = document.getElementById("signup-form");
    if (signupForm.style.display == 'block') {
        signupForm.style.display = "none";
    }
    signupForm.style.display = "block";
  }

function signup() {
  var username = document.getElementById("signup-username").value;
  var password = document.getElementById("signup-password").value;

  var user = users.find(function(u) {
    return u.username === username;
  });

  if (user) {
    alert("Username already exists. Please choose a different username.");
  } else {
    users.push({ username: username, password: password });
    alert("Signup successful!");
    // Perform redirection or other actions
  }
} 