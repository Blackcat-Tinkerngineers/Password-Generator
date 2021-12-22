    // Assignment code here


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


function generatePassword(){
    var upper="QWERTYUIOPASDFGHJKLZXCVBNM"
    var lower=upper.toLowerCase()
    var num="1234567890"
    var special="!@#$%^&*()_+"
    var charBase=""
    var generatedPassword=""

    var confirmlower=confirm("Do you want lower case characters?") 
    if (confirmlower) {
        charBase+=lower
    }

    var confirmupper=confirm("Do you want upper case characters?") 
    if (confirmupper) {
        charBase+=upper
    }
    var confirmnumber=confirm("Do you want numbers?") 
    if (confirmnumber) {
        charBase+=num
    }
    var confirmspecial=confirm("Do you want special characters?") 
    if (confirmspecial) {
        charBase+=special
    }
    var length= prompt("Choose a password length of 8-128")
    for (let index = 0; index < length; index++) {
        generatedPassword += charBase.charAt(Math.floor(Math.random()*charBase.length))
        
    }
return generatedPassword

}


