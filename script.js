// Assignment code here
// IDK HOW TO START THIIIIS
let parameters = ["capital letter", " lowercase letter", " numeric", " special character"];
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pass=document.getElementById("#password");
var pass = "";

function generatePassword() {
  // var passwordAlert = window.alert("Password requires " + (parameters))
  for (var i = 8; i <=128; i++) {
    pass += chars.substring(Math.floor(Math.random() * chars.length));
  }
  return pass;
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
