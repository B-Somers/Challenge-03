
var generateBtn = document.querySelector("#generate");


function randomInt(min, max){
  if (!max) {
    max = min
    min = 0 
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list){
  return list[randomInt(list.length)]
}

function generatePassword() {
  // this asks user how long they want the password to be
  var userInput = window.prompt("How long would you like the password to be?")

  var passwordLength = parseInt(userInput)
  // alerts user if they put in incorrect variable ( example: user puts twelve it gives error )
  if (isNaN(passwordLength)) {
    window.alert("that's not a valid number")
    return
  }
  // tells user they must choose a password between 8 and 128 charactors 
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Password length must be between 8 and 128 charactors ")
    return
  }
  // this gives user choice of how they want the password to come out 
  var userWantsNumbers = window.confirm("Would you like to include numbers in you're password? ")
  var userWantsSymbols = window.confirm("Would you like to include symbols in you're password? ")
  var userWantsLowercase = window.confirm("Would you like to include lowercase in you're password? ")
  var userWantsUppercase = window.confirm("Would you like to include uppercase in you're password? ")
// this is a list of all charictors avalible for random selection
  var numberList = ["0", "1", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "*", ">", "~", "^", "&"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionsCart = []
// this takes the users selected peramiters of password and assigns booleon value to each for random generator to sellect what lists it chooses from 
  if (userWantsNumbers === true){
    optionsCart.push(numberList)
  }
  if (userWantsSymbols === true){
    optionsCart.push(symbolList)
  }
  if (userWantsLowercase === true){
    optionsCart.push(lowercaseList)
  }
  if (userWantsUppercase === true){
    optionsCart.push(uppercaseList)
  }
  // this is a default option. if user does not sellect any options it will automatcally give them a full random lowercase list.
  if (optionsCart.length === 0 ){
    optionsCart.push(lowercaseList)
  }
// This makes note of final password chosen
  var generatedpassword = ""
// this prints random charictors in group vs row by row 
  for (var i = 0; i < passwordLength; i++){
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedpassword += randomChar
  }

  return generatedpassword
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
