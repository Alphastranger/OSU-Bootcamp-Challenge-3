// Assignment code here
// IDK HOW TO START THIIIIS
let parameters =  {

capitals: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",'p','q','r','s','t','u','v','w','x','y',"z"],
numbers: ["0",'1','2','3','4','5','6','7','8',"9"],
specialChars: ["!",'@','#','$','%','^','&','*'],

};
let chars = "";
// var pass=document.getElementById("#password");
var pass = "";

function generatePassword() {
  var passwordAlert = window.alert("Password requires capital, lowercase, numeric, and special character")
  var passwordLength = window.prompt("Input password length between 8 and 128")
  if (confirm("Do you want numbers in your password?") == true) {
    chars += parameters.numbers;
  }
  else {
    return chars;
  }
  if (confirm("Do you want capitals in your password?") == true) {
    chars += parameters.capitals;
  }
  else {
    !capitals;
  }
  if (confirm("Do you want lowercase letters in your password?") == true) {
    chars += parameters.lowercase;
  }
  else {
    !lowercase;
  }
  if (confirm("Do you want special characters in your password?") == true) {
    chars += parameters.specialChars;
  }
  else {
    !specialChars;
  }
  if (passwordLength < 8 || passwordLength >128) {
    window.alert("Please input a proper length");
  }
  // else {
  //   pass += chars.charAt(Math.random() * passwordLength);
  //   }

  for (var i =passwordLength; i++;) {
    pass += parameters.charAt(Math.floor(Math.random() * passwordLength));
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
