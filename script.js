// Assignment code here
// IDK HOW TO START THIIIIS
let parameters = ["capital letter", " lowercase letter", " numeric", " special character"];
parameters [1] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
parameters [2] = "abcdefghijklmnopqrstuvwxyz";
parameters [3] = "0123456789";
parameters [4] = "!@#$%^&*()"
let chars = "";
var pass=document.getElementById("#password");
var pass = "";

function generatePassword() {
  var passwordAlert = window.alert("Password requires capital, lowercase, numeric, and special character")
  var passwordLength = window.prompt("Input password length between 8 and 128")
  if (confirm("Do you want numbers in your password?") == true) {
    chars += parameters[3];
  }
  else {
    !parameters[3];
  }
  if (confirm("Do you want capitals in your password?") == true) {
    chars += parameters[1];
  }
  else {
    !parameters[1];
  }
  if (confirm("Do you want lowercase letters in your password?") == true) {
    chars += parameters [2];
  }
  else {
    !parameters[2];
  }
  if (confirm("Do you want special characters in your password?") == true) {
    chars += parameters [4];
  }
  else {
    !parameters[4];
  }
  if (passwordLength < 8 || passwordLength >128) {
    window.alert("Please input a proper length");
  }
  else {
    pass += chars.substring(Math.random() * passwordLength);
    }

  // for (var i = 8; i <=128; i++) {
  //   pass += chars.substring(Math.floor(Math.random() * pass.length));
  // }
  
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
