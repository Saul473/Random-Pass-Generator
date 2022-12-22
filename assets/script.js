// Assignment Code
//var generateBtn = document.querySelector("#generate");
//generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var choices = [];
var passwordLength = 8;
var passwordNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ';', '.', '/', '?', '<', '>'];


// 1. Prompt user w/password criteria
// . choose length of password between 8-128
// . ask to include: lowercase, uppercase, numeric, and special chars.
// 2. validate user's response with an alert after each selection
function generatePassword() {

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * choices.length);
    password = password + choices[random];
  }
  return password;
}


// Write password to the #password input
function writePassword() { 
  var newPassword = getPrompts();
  var passwordText = document.querySelector("#password");
  if (newPassword) {
    var password = generatePassword();
    passwordText.value = password; 
  } else {
    passwordText.value = "";
  }
}

//prompts
function getPrompts() {
  choices = [];

  passwordLength = parseInt(prompt("How long would you like your password to be? \n Please choose a number between 8 - 128."));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Password length has to be within 8 - 128 characters in length. \n Try again.');
    return false;
  }

  if (confirm('Would you like your password to have numbers?')) {
    choices = choices.concat(passwordNumbers);
  }

  if (confirm('Would you like your password to have uppercase letters?')) {
    choices = choices.concat(uppercaseLetters);
  }

  if (confirm('Would you like your password to have lowercase letters?')) {
    choices = choices.concat(lowercaseLetters);
  }

  if (confirm('Would you like your password to have special characters?')) {
    choices = choices.concat(specialCharacters);
  }
  return true;
}