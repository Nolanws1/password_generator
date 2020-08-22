//All possible Password Characters 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "&", "*", "?"]

//Randomize possible Password Chracters
var randomUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
var randomLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
var randomNumber = number[Math.floor(Math.random() * number.length)];
var randomSpecial = special[Math.floor(Math.random() * special.length)];

//User input form
var checkUpperCase = document.getElementById("Upper");
var checkLowerCase = document.getElementById("Lower");
var checkNumber = document.getElementById("Number");
var checkSpecial = document.getElementById("Special");
var passwordLength = document.getElementById("userLength");
var result = document.getElementById("result");
var tryAgain = 'Try Again'

//Button onclick
var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", pressButton)
function pressButton() {
  var possibleSelection = []
  var randomizedSelection = possibleSelection;
  var selectedLength = parseInt(passwordLength.value)
  var output = ''
  if (checkUpperCase.checked == true) {
    possibleSelection.push(randomUpperCase)
  }
  if (checkLowerCase.checked == true) {
    possibleSelection.push(randomLowerCase)
  }
  if (checkNumber.checked == true) {
    possibleSelection.push(randomNumber)
  }
  if (checkSpecial.checked == true) {
    possibleSelection.push(randomSpecial)
  }
  for (var i = 0; i < selectedLength; i++) {
    output += randomizedSelection[Math.floor(Math.random() * randomizedSelection.length)];
  }
  //Enforce Password Length Specifications
  if (selectedLength < 8) {
    alert("Please choose a password length over 8 characters");
    output = 'Try Again'
  }
  if (selectedLength > 128) {
    alert("Please choose a password length under 128 characters");
    output = 'Try Again'
  }
  //html Output
  document.getElementById("result").innerHTML = output;
} 
