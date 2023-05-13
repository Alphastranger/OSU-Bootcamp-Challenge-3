// Assignment code here
let parameters = {

  capitals: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
  lowercase: ['abcdefghijklmnopqrstuvwxyz'],
  numbers: ['0123456789'],
  specialChars: ['!@#$%^&*'],

};
let chars = "";
var passEl = document.getElementById("password");
let arr = []
let length;
function generatePassword() {
  var passwordAlert = window.alert("Password requires capital, lowercase, numeric, and special character")
  var passwordLength = window.prompt("Input password length between 8 and 128")
  length = passwordLength
  console.log(passwordLength)
  if (confirm("Do you want numbers in your password?") == true) {
    chars += parameters.numbers;
    console.log(chars)
  }

  if (confirm("Do you want capitals in your password?") == true) {
    chars += parameters.capitals;
    console.log(chars)
  }

  if (confirm("Do you want lowercase letters in your password?") == true) {
    chars += parameters.lowercase;
    console.log(chars)
  }

  if (confirm("Do you want special characters in your password?") == true) {
    chars += parameters.specialChars;
    console.log(chars)
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please input a proper length");
  }
  const charsFinal = chars.split('')
  console.log(charsFinal)
  console.log(charsFinal.length)
        for (i=0; i<passwordLength; i++)
        {let passLength = Math.floor(Math.random() * charsFinal.length);
        console.log(passLength) 
        const finalThing = arr.push(charsFinal[passLength])
        console.log(arr)
        
      }
        passEl.value = arr.join('')
        console.log(passEl.value)
        return passEl.value;
        //;
        // console.log(finalThing)  
        
      // }
      // while (i<=passwordLength);
      
    
    
    
    // arr.push([Math.floor(Math.random() * passwordLength)])

  
  // for (var i =passwordLength; i++;) {
  //   pass += parameters.charAt(Math.floor(Math.random() * passwordLength));
  // }

  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // let output = []
  // for(let i = 0; i < length; i++)
  // {
  //   output.push(chars[Math.floor(Math.random() * chars.length)])
  // }
  // output = output.join('')
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
