// Assignment code here

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("How long would you like the password to be?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("that's not a valid number")
    return
  }
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Password length must be between 8 and 128 charactors ")
    return
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in you're password? ")
  var userWantsSymbols = window.confirm("Would you like to include symbols in you're password? ")
  var userWantsLowercase = window.confirm("Would you like to include lowercase in you're password? ")
  var userWantsUppercase = window.confirm("Would you like to include uppercase in you're password? ")

  var numberList = ["0", "1", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "*", ">", "~", "^", "&"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionsCart = []

  if (userWantsNumbers === true){
    optionsCart.push(numberList)
  }
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
