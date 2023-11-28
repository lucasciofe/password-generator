// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// var passwordMinimum = 8;
// var passwordMax = 128
var passwordLength;
var arr ="";

isLowerCase = true;
isUpperCase = false;
isNumeric = false;
isSpecialCharacters = false;
var allList = [];



// Function to prompt user for password options

function getPasswordOption(){
  //all options true

  if (isUpperCase == true ){
    if((isNumeric == true) && (isSpecialCharacters == true)){
       //create a new array with all elements.
      allList = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
    }else if ((isNumeric == false) && (isSpecialCharacters == true)){
      allList = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters );
    }else {
      allList = upperCasedCharacters.concat(lowerCasedCharacters);
    }
  }else if (isNumeric == true){
    if((isUpperCase == false) && (isSpecialCharacters == true)){
      allList = specialCharacters.concat(lowerCasedCharacters, numericCharacters);
    }else{
      allList = numericCharacters.concat(lowerCasedCharacters);
    }
  }else if (isSpecialCharacters == true){
    if((isUpperCase == false) && (isNumeric == true)){
      allList = specialCharacters.concat(numericCharacters)
    }else {
      allList = specialCharacters.concat(lowerCasedCharacters);
    }
  }else {
    allList = lowerCasedCharacters;
  }
  
}
//function to generate a password with random length 
function getPasswordLength(passwordMinimum, passwordMax) {
  passwordLength = Math.floor(Math.random() * (passwordMax -passwordMinimum) + passwordMinimum);
  return passwordLength;
}

// Function for getting a random element from an array
function getRandom(arr) {

  length = parseInt(prompt("What is the password length? between 8 to 128"));
  isUpperCase = confirm("Do you like to add uppercase in your password?")
  isNumeric = confirm("Do you like to add numeric in your password? ") 
  isSpecialCharacters = confirm("Do you like to add special characters in your password? ");
  
  getPasswordLength(length,length)
  getPasswordOption();
  
  for (var i = 0; i <= passwordLength; i++){
     arr += allList[Math.floor(Math.random() * allList.length)];
    
  }
  return arr;
}

// Function to generate password with user input
function generatePassword(arr) {
  password = getRandom(arr);
  

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getRandom(arr);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);