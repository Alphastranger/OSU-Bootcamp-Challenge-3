// Assignment code here
// IDK HOW TO START THIIIIS
let parameters = ["capital letter", " lowercase letter", " numeric", " special character"];
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let pass = "";

function generatePassword() {
  var passwordPrompt = window.prompt("Password requires " + (parameters))
  for (var i = 0; 8 <= i <= 128; i++) {
    var randomNumber = Math.floor(Math.random () * chars.length) ;
    
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
