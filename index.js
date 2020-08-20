var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "&", "*", "?"]

var randomUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
var randomLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
var randomNumber = number[Math.floor(Math.random() * number.length)];
var randomSpecial = special[Math.floor(Math.random() * special.length)];

var yourPassword = [randomUpperCase, randomLowerCase, randomNumber, randomSpecial]

function checkUpper() {
  var checkBox = document.getElementById("Upper");
  if (checkBox.checked == true) & pressButton(true) {
    (randomUpperCase = true)
  } else { false
  }
}
function checkLower() {
  var checkBox = document.getElementById("Lower");
  if (checkBox.checked == true){
    (randomUpperCase = true)
  } else { false
  }
}
function checkSpecial() {
  var checkBox = document.getElementById("Special");
  if (checkBox.checked == true){
    (randomUpperCase = true)
  } else { false
  }
}
function checkNumber() {
  var checkBox = document.getElementById("Number");
  if (checkBox.checked == true){
    (randomUpperCase = true)
  } else { false
  }
}


//User input form
var checkUpperCase = document.getElementById("Upper");
var checkLowerCase = document.getElementById("Lower");
var checkNumber = document.getElementById("Number");
var checkSpecial = document.getElementById("Special");
var passwordLength = document.getElementById("Length");
var result = document.getElementById("result");

//Button onclick
function pressButton() {
    document.getElementById("result").innerHTML = yourPassword;
  }