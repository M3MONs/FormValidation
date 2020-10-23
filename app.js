const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginForm = document.querySelector("#login-form");

const emailErrorContainer = document.querySelector(".email-error");
const passwordErrorContainer = document.querySelector(".pass-error");

let emailError = [],
  passwordError = [];

loginForm.addEventListener("submit", (x) => {
  validateEmail(emailInput.value);

  validatePassword(passwordInput.value);

  if (emailError.length > 0) {
    emailErrorContainer.textContent = emailError.join(", ");
    document.querySelector("#error-e").style.display = "block";
    emailError = [];
    x.preventDefault();
  } else {
    document.querySelector("#error-e").style.display = "none";
  }

  if (passwordError.length > 0) {
    passwordErrorContainer.textContent = passwordError.join(", ");
    document.querySelector("#error-p").style.display = "block";
    passwordError.length = 0;
    x.preventDefault();
  } else {
    document.querySelector("#error-p").style.display = "none";
  }
});

//Function for validation Email
function validateEmail(email) {
  //email structure
  var re = /\S+@\S+\.\S+/;
  if (!re.test(email)) emailError.push("Please input right Email");
}
//Function for validation Password
function validatePassword(password) {
  if (password.length < 6)
    passwordError.push("Password must be longer than 6 char");

  if (password.length > 20)
    passwordError.push("Password must be less than 20 characters");

  if (password.toLowerCase() === passwordInput.value)
    passwordError.push("Password must contain upper Case");

  if (!password.match(/[0-9]/g))
    passwordError.push("Password must contain digit");

  if (!password.match(/[^a-zA-Z\d]/g))
    passwordError.push("Password must contain special character");
}
